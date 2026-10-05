import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(__dirname, "spray-gun-source.png");
const output = path.join(root, "public", "service-protection-gun.webp");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const smoothstep = (lo, hi, v) => {
  const t = Math.min(1, Math.max(0, (v - lo) / (hi - lo)));
  return t * t * (3 - 2 * t);
};

// Nozzle tip x-position in the 1024px-wide source; everything to the right is powder.
const sprayStartX = Math.round(info.width * (388 / 1024));
const lightBlue = [70, 130, 225];
const deepBlue = [16, 68, 178];

for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * 4;
    const max = Math.max(data[i], data[i + 1], data[i + 2]);
    const min = Math.min(data[i], data[i + 1], data[i + 2]);

    if (x >= sprayStartX) {
      // Against black, brightness is powder presence and white highlights are thin powder,
      // so saturated blue stays dense while highlights let the white page through.
      const presence = Math.min(1, (max / 255) * 1.3);
      const whiteness = min / 255;
      const saturation = max ? (max - min) / max : 0;
      for (let c = 0; c < 3; c++) {
        data[i + c] = Math.round(lightBlue[c] + (deepBlue[c] - lightBlue[c]) * saturation);
      }
      data[i + 3] = Math.round(presence * (1 - 0.8 * whiteness) * 255);
    } else {
      // Gun and hoses keep their colour; only the near-black backdrop drops out.
      data[i + 3] = Math.round(smoothstep(6, 20, max) * 255);
    }
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .webp({ quality: 95, alphaQuality: 100 })
  .toFile(output);

console.log("Wrote", output);
