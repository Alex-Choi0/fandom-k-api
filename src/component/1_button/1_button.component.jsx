const ButtonComponent1 = ({
  classNameSet = "",
  width = "100%",
  height = "100%",
  btnName = "button",
  bgColor = "#F86F65",
  textColor = "#fff",
  padding = "10px 20px",
  borderRadius = "8px",
  fontSize = "20px",
}) => {
  return (
    <>
      <button
        className={classNameSet}
        style={{
          backgroundColor: bgColor,
          height,
          width,
          color: textColor,
          padding: padding,
          borderRadius: borderRadius,
          fontSize,
          border: "none",
          cursor: "pointer",
        }}
      >
        {btnName}
      </button>
    </>
  )
}

export default ButtonComponent1
