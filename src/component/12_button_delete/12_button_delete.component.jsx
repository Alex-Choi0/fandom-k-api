import deleteButtonImg from "../../assets/icon/btn_delete.png"

const ButtonDeleteComponent12 = ({
  position = "relative",
  width = "22px",
  height = "22px",
  top = "25px",
  right = "-25px",
  zIndex = 11,
  styles = {},
}) => {
  return (
    <>
      <img
        src={deleteButtonImg}
        // position={position}
        // width={width}
        // height={height}
        // top={top}
        // right={right}
        style={{
          position,
          width,
          height,
          top,
          right,
          zIndex,
          ...styles,
        }}
        alt="삭제 버튼"
      />
    </>
  )
}

export default ButtonDeleteComponent12
