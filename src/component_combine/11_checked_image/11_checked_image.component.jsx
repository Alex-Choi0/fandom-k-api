import checkedImage from "../../assets/icon/checked.png";
import ImageComponent2 from "../../component/2_image/2_image.component";

/**
 * CheckedImage11 컴포넌트
 *
 * 이미지 위에 색상 오버레이와 체크 아이콘을 표시할 수 있는 합성 이미지 컴포넌트
 *
 * @param {string} src - 이미지 경로 (필수)
 * @param {string} display - 외부에서 사용할 display 속성 (기본값: inline-block)
 * @param {string} alt - 이미지 대체 텍스트
 * @param {string} width - 이미지/박스의 너비 (기본값: 60px)
 * @param {string} height - 이미지/박스의 높이 (기본값: 60px)
 * @param {string} borderRadius - 테두리 둥글기 (기본값: 50% → 원형)
 * @param {string} backgroundColor - 이미지 배경색
 * @param {string} objectFit - 이미지 채우기 방식 (cover, contain 등)
 * @param {string} objectPosition - 이미지에서 보일 위치 조정
 * @param {string} border - 이미지 테두리 (기본값: 2px solid #F96D69)
 * @param {string} padding - 이미지 padding
 * @param {string} maskImage - 마스크 효과 (예: 그라데이션), "none"이면 제거
 * @param {string} srcChecked - 체크 이미지 경로
 * @param {Object} scrCheckedPosition - 체크 아이콘의 위치 및 크기 설정
 * @param {string} color - 오버레이 색상 (status가 true일 때만 적용)
 * @param {boolean} status - 체크 이미지 및 오버레이 표시 여부
 *
 * @returns JSX.Element
 */
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
  overflow = "hidden",
  scrCheckedPosition = {
    position: "absolute",
    right: "30%",
    bottom: "30%",
    width: "27%",
    height: "auto",
  },
  color = "#F96E68",
  status = true,
  onClick,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius,
        overflow,
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
        onClick={onClick} // 예지 : 관심 아이돌 클릭 시 추가를 위한 수정
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
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "27%",
            height: "auto",
            ...scrCheckedPosition,
          }}
        />
      )}
    </div>
  );
};

export default CheckedImage11;
