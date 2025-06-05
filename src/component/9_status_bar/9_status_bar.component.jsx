/**
 * 상태바(Progress bar) 컴포넌트
 * - 왼쪽/오른쪽 영역을 각각 단색으로 구분해 보여줌
 * - `leftPercentage` 만큼 왼쪽 색상을 채우고, 나머지는 오른쪽 색상을 채움
 *
 * @param {Object} props - 설정값
 * @param {string} props.className - 외부에서 전달받은 className (Tailwind 등)
 * @param {string} props.width - 전체 바의 너비 (기본값: "100px")
 * @param {string} props.height - 바의 높이 (기본값: "6px")
 * @param {string} props.leftColor - 왼쪽 색상 (기본값: "red")
 * @param {string} props.rightColor - 오른쪽 색상 (기본값: "blue")
 * @param {number} props.leftPercentage - 왼쪽 색상이 차지할 비율 (0 ~ 100 사이 값만 허용)
 * @param {string} props.borderRadius - 테두리 둥글기 (기본값: "4px")
 *
 * @returns JSX.Element
 */
const StatusBarComponent9 = ({
  className = "",
  width = "100px",
  height = "6px",
  leftColor = "red",
  rightColor = "blue",
  leftPercentage = 30,
  borderRadius = "4px",
}) => {
  if (leftPercentage > 100 || leftPercentage < 0) {
    throw new Error("leftPercentage는 0 ~ 100 사이 값만 가능합니다.")
  }

  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: "flex",
        borderRadius,
        overflow: "hidden", // 둥근 모서리 적용 시 필요 : 자식요소가 부모요소의 범위를 넘으면 overflow상태. overflow를 숨기면 해결 완료
      }}
    >
      <div
        style={{
          width: `${leftPercentage}%`,
          backgroundColor: leftColor,
        }}
      />
      <div
        style={{
          width: `${100 - leftPercentage}%`,
          backgroundColor: rightColor,
        }}
      />
    </div>
  )
}

export default StatusBarComponent9
