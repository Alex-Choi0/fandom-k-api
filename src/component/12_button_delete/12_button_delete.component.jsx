import deleteButtonImg from "../../assets/icon/btn_delete.png"

const ButtonDeleteComponent12 = ({
  position = "static",
  width = "22px",
  height = "22px",
  bottom = "5px",
  left = "5px",
  zIndex = 11,
}) => {
  return (
    <>
      <img
        src={deleteButtonImg}
        position={position}
        width={width}
        height={height}
        bottom={bottom}
        left={left}
        zIndex={zIndex}
      />
    </>
  )
}

export default ButtonDeleteComponent12
