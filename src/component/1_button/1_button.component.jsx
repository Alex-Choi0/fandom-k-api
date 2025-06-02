/**
 * 범용 버튼 컴포넌트
 *
 * @param {Object} props - 버튼 설정값
 * @param {string} props.classNameSet - 외부에서 전달된 클래스 네임 (Tailwind나 커스텀 클래스용)
 * @param {string} props.width - 버튼의 너비 (기본값: "100%")
 * @param {string} props.height - 버튼의 높이 (기본값: "100%")
 * @param {string} props.btnName - 버튼에 표시될 텍스트 (기본값: "button")
 * @param {string} props.bgColor - 단색 배경일 때 사용되는 배경색 (기본값: "#828282")
 * @param {string[]} props.gradient - 그라데이션 색상 배열, 2개 이상일 경우 적용됨(0,1번 인덱스만 적용 - 왼쪽[0]부터 오른쪽[1])
 * @param {string} props.textColor - 버튼 텍스트 색상 (기본값: "#fff")
 * @param {string} props.padding - 버튼 안쪽 여백 (기본값: "10px 20px")
 * @param {string} props.borderRadius - 버튼 모서리 둥글기 (기본값: "8px")
 * @param {string} props.fontSize - 텍스트 크기 (기본값: "20px")
 * @param {string} props.border - border 설정 (기본값 : "none")
 *
 * @returns JSX.Element
 */
const ButtonComponent1 = ({
  classNameSet = "", // 해당 버튼의 클래스 네임
  width = "100%",
  height = "100%",
  btnName = "button",
  bgColor = "#828282",
  gradient = ["#F86F65", "#FE5493"],
  textColor = "#fff",
  padding = "0 0",
  borderRadius = "8px",
  fontSize = "20px",
  border = "none",
  onClick,
}) => {
  const style = {
    background:
      gradient.length > 1
        ? `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`
        : bgColor,
    height,
    width,
    color: textColor,
    padding: padding,
    borderRadius: borderRadius,
    fontSize,
    border,
    cursor: "pointer",
  };

  return (
    <>
      <button className={classNameSet} style={style} onClick={onClick}>
        {btnName}
      </button>
    </>
  );
};

export default ButtonComponent1;
