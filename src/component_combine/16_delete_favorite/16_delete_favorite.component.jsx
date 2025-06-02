import ButtonDeleteComponent12 from "../../component/12_button_delete/12_button_delete.component";
import ImageComponent2 from "../../component/2_image/2_image.component";

/**
 * DeleteFavoriteComponent16
 * - 원형 프로필 이미지와 그 위에 삭제 버튼("X")을 표시하는 컴포넌트
 * - 삭제 버튼은 이미지 우상단에 위치
 *
 * @param {string} src - 이미지 경로 (필수)
 * @param {string} display - display 방식 (기본값: "flex")
 * @param {string} alt - 대체 텍스트
 * @param {string} width - 이미지 및 컨테이너 너비
 * @param {string} height - 이미지 및 컨테이너 높이
 * @param {string} borderRadius - 이미지 둥글기 (기본: 원형 "50%")
 * @param {string} backgroundColor - 이미지 배경색
 * @param {string} objectFit - 이미지 비율 유지 방식 (기본값: "cover")
 * @param {string} objectPosition - 이미지 표시 위치
 * @param {string} border - 이미지 테두리 스타일
 * @param {string} padding - 이미지 패딩
 * @param {string} maskImage - 이미지 마스킹 효과 (기본: "none")
 * @param {string} position - 부모 position (기본 : "relative")
 *
 * @returns JSX.Element
 */
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
  position = "relative",
  onRemove,
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
        onClick={onRemove}
        styles={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: 11,
        }}
      />
    </div>
  );
};

export default DeleteFavoriteComponent16;
