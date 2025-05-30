/**
 * 범용 이미지 컴포넌트
 *
 * @param {Object} props - 이미지 설정값
 * @param {string} props.classNameSet - 외부에서 전달받은 CSS 클래스 (Tailwind 등 사용 가능)
 * @param {string} props.src - 이미지 경로 (필수, 없으면 렌더링 안함)
 * @param {string} props.alt - 이미지 대체 텍스트 (기본값: "image")
 * @param {string} props.width - 이미지 너비 (기본값: "auto")
 * @param {string} props.height - 이미지 높이 (기본값: "auto")
 * @param {string} props.borderRadius - 이미지 모서리 둥글기 (기본값: "8px")
 * @param {string} props.backgroundColor - 이미지 배경색 (기본값: "none")
 * @param {string} props.objectFit - 이미지 비율 조정 방식 (기본값: "cover")
 * @param {string} props.border - 이미지의 경계면(border)값을 조정 (기본값 : "1px solid #F96D69")
 * @param {string} props.padding - 이미지의 padding값을 설정한다. (기본값 : "0 0")
 * @param {string} props.maskImge - 이미지의 불투명도를 설정한다. 해제할시 "none"입력 (기본값 : "linear-gradient(to bottom, black 85%, transparent 100%)")
 *
 * @returns JSX.Element
 */
const ImageComponent2 = ({
  classNameSet = "", // 외부에서 Tailwind 또는 custom class 적용 시 사용
  src, // 이미지 경로 (필수)
  alt = "image", // 이미지 대체 텍스트
  width = "auto", // 이미지 너비
  height = "auto", // 이미지 높이
  borderRadius = "8px", // 테두리 둥글기
  backgroundColor = "none", // 배경색
  objectFit = "cover", // 이미지 비율 조정 (cover, contain 등)
  border = "1px solid #F96D69",
  padding = "0 0",
  maskImage = "linear-gradient(to bottom, black 85%, transparent 100%)",
}) => {
  if (!src) return null // src가 없으면 렌더링하지 않음

  // 스타일 객체 구성
  const style = {
    width,
    height,
    borderRadius,
    objectFit, // 예: cover, contain, fill 등
    backgroundColor,
    boxSizing: "border-box", // padding 이슈 방지용
    border,
    padding,
    maskImage,
  }

  return <img className={classNameSet} src={src} alt={alt} style={style} />
}

export default ImageComponent2
