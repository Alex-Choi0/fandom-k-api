/**
 * 범용 텍스트 출력 컴포넌트
 *
 * @param {Object} props - 텍스트 관련 스타일 설정
 * @param {string} props.classNameSet - 외부에서 전달받은 CSS 클래스명 (Tailwind 등 확장 가능)
 * @param {string} props.width - 요소의 너비 (기본값: "100%")
 * @param {string} props.height - 요소의 높이 (기본값: "100%")
 * @param {string} props.text - 표시할 텍스트 (기본값: "강남역 광고")
 * @param {string} props.bgColor - 배경 색상 (기본값[투명]: "transparent")
 * @param {string} props.textColor - 텍스트 색상 (기본값: "#000")
 * @param {string} props.padding - 내부 여백 (기본값: "0 0")
 * @param {string} props.borderRadius - 모서리 둥글기 (기본값: "0")
 * @param {string} props.fontSize - 글자 크기 (기본값: "20px")
 * @param {string} props.border - 테두리 설정 (기본값: "none")
 * @param {string} props.display - CSS display 속성 (기본값: "inline-block")
 * @param {number|string} props.opacity - 투명도 (기본값: 1)
 * @param {string} props.textAlign - 텍스트 정렬 (기본값: "center")
 * @param {string} props.lineHeight - 텍스트 줄 높이 (= 세로 정렬용) (기본값: "100%")
 *
 * @returns JSX.Element
 *
 * ✅ 세로 중앙 정렬을 위해선 lineHeight와 height 값을 동일하게 설정하는 것이 일반적이다.
 *    예: height: "50px", lineHeight: "50px"
 * ✅ 현재는 lineHeight: "100%"로 설정되어 있으므로, 텍스트 높이와 완전히 맞지 않을 수 있음.
 *    명확하게 중앙 정렬하려면 px 단위로 지정하는 것이 좋음.
 */
const TextComponent8 = ({
  classNameSet = "", // 해당 버튼의 클래스 네임
  width = "100%",
  height = "100%",
  text = "강남역 광고",
  bgColor = "transparent",
  textColor = "#000",
  padding = "0 0",
  borderRadius = "0",
  fontSize = "20px",
  border = "none",
  display = "inline-block",
  opacity = 1,
  textAlign = "center",
  lineHeight = "100%",
}) => {
  const style = {
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
    padding,
    borderRadius,
    fontSize,
    border,
    display,
    opacity,
    textAlign,
    lineHeight,
  }

  return (
    <>
      <span className={classNameSet} style={style}>
        {text}
      </span>
    </>
  )
}

export default TextComponent8
