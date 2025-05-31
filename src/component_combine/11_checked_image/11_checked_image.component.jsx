import checkedImage from "../../assets/icon/checked.png"
import ImageComponent2 from "../../component/2_image/2_image.component"

const CheckedImage11 = ({
  src, // 이미지 경로 (필수)
  display = "inline-block",
  alt = "image", // 이미지 대체 텍스트
  width = "60px", // 이미지 너비
  height = "60px", // 이미지 높이
  borderRadius = "50%", // 테두리 둥글기
  backgroundColor = "none", // 배경색
  objectFit = "cover", // 이미지 비율 조정 (cover, contain 등)
  objectPosition = "center top",
  border = "2px solid #F96D69",
  padding = "2px",
  maskImage = "none",
  srcChecked = checkedImage,
  scrCheckedPosition = {
    position: "absolute",
    right: "30%",
    bottom: "30%",
    width: "20px",
    height: "20px",
  },
  color = "#F96E68",
  status = true,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius,
        overflow: "hidden",
        display,
      }}
    >
      <ImageComponent2
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        objectFit={objectFit}
        objectPosition={objectPosition}
        border={border}
        padding={padding}
        maskImage={maskImage}
      />
      {/* 위에 얹을 불투명 색 레이어 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: status ? color : "transparent",
          opacity: 0.4, // ✅ 불투명도 조절
          pointerEvents: "none", // 마우스 이벤트 통과
        }}
      />

      {/* 체크 표시 (필요 시) */}
      {status && (
        <img
          src={srcChecked}
          alt="checked"
          style={{
            position: "absolute",
            right: "30%",
            bottom: "30%",
            width: "20px",
            height: "20px",
            ...scrCheckedPosition,
          }}
        />
      )}
    </div>
  )
}

export default CheckedImage11
