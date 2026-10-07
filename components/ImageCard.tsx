type ImageCardProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  className: string;
  contentClassName?: string;
};

export default function ImageCard({
  src,
  alt,
  title,
  description,
  className,
  contentClassName = "p-6 sm:p-8",
}: ImageCardProps) {
  return (
    <article className={`group relative overflow-hidden text-left ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#003b6b]/90 via-[#003b6b]/25 to-transparent ${contentClassName}`}>
        <h3 className={`font-title ${description ? "mb-3" : "mb-5"} text-2xl font-bold uppercase text-white sm:text-3xl`}>
          {title}
        </h3>
        {description && (
          <p className="max-w-lg font-mona text-[20px] font-normal leading-[24px] text-white/90">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}