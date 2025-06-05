import deleteButtonImg from "../../assets/icon/btn_delete.svg";

const ButtonDeleteComponent12 = ({
  position = "relative",
  width = "32%",
  top = "25px",
  right = "-25px",
  zIndex = 11,
  styles = {},
  onClick,
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
          top,
          right,
          zIndex,
          ...styles,
        }}
        alt="삭제 버튼"
        onClick={onClick}
      />
    </>
  );
};

export default ButtonDeleteComponent12;
