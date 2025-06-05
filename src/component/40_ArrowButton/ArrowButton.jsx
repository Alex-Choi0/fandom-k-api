import arrowLeft from "../../assets/icon/arrow-left.svg";
import arrowRight from "../../assets/icon/arrow-right.svg";

const ArrowButton = ({
  direction = "left", // "left" or "right"
  onClick,
  width = 29,
  height = 135,
  backgroundColor = "rgba(27, 27, 27, 0.8)",
  iconWidth = 6, // 화살표 아이콘 크기
  iconHeight = 12, // 화살표 아이콘 크기
  className = "",
  style = {},
}) => {
  const icon = direction === "right" ? arrowRight : arrowLeft;

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        width,
        height,
        backgroundColor,
        border: "none",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: 0,
        ...style,
      }}
    >
      <img
        src={icon}
        alt={`${direction} arrow`}
        style={{ width: iconWidth, height: iconHeight }}
      />
    </button>
  );
};

export default ArrowButton;
