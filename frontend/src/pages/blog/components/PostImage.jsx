const PostImage = ({ src, alt, className, fallbackClass }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${className} ${fallbackClass} flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="h-12 w-12 bg-white/30 backdrop-blur-md" />
    </div>
  );
};

export default PostImage;
