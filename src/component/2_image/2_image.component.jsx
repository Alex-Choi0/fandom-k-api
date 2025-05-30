const ImageComponent = ({
  classNameSet = "",
  src,
  alt = "image",
  width = "auto",
  height = "auto",
  borderRadius = "8px",
  backgroundColor = "none",
  padding = "0 0",
}) => {
  return (
    <img
      className={classNameSet}
      src={src}
      alt={alt}
      style={{
        width,
        height,
        borderRadius,
        objectFit: "cover",
        backgroundColor,
        padding,
      }}
    />
  )
}

export default ImageComponent
