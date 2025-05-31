import ButtonDeleteComponent12 from "../../component/12_button_delete/12_button_delete.component"
import ImageComponent2 from "../../component/2_image/2_image.component"

const DeleteFavoriteComponent16 = ({
  src, // 이미지 경로 (필수)
  display = "flex",
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
  position = "relation",
}) => {
  return (
    <div
      className="delete-favorite"
      style={{
        position,
        width,
        height,
        borderRadius,
        // overflow: "hidden",
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageComponent2
        src={src}
        display={display}
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
      <ButtonDeleteComponent12
        styles={{
          position: "relative",
          top: "-70px",
          right: "-20px",
          zIndex: 11,
        }}
      />
    </div>
  )
}

export default DeleteFavoriteComponent16
