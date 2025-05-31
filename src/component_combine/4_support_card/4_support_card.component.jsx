import ButtonComponent1 from "../../component/1_button/1_button.component"
import ImageComponent2 from "../../component/2_image/2_image.component"

const SupportCardComponent4 = ({
  classNameSet = "",
  setImage = {
    classNameSet: "", // 외부에서 Tailwind 또는 custom class 적용 시 사용
    src, // 이미지 경로 (필수)
    alt: "image", // 이미지 대체 텍스트
    width: "293px", // 이미지 너비
    height: "282px", // 이미지 높이
    borderRadius: "8px", // 테두리 둥글기
    backgroundColor: "none", // 배경색
    objectFit: "cover", // 이미지 비율 조정 (cover, contain 등)
    border: "none",
    padding: "0 0",
    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
  },

  setButton = {
    classNameSet: "", // 해당 버튼의 클래스 네임
    width: "234px",
    height: "40px",
    btnName: "후원하기",
    bgColor: "#828282",
    gradient: ["#F86F65", "#FE5493"],
    textColor: "#fff",
    padding: "0 0",
    borderRadius: "3px",
    fontSize: "20px",
    border: "none",
  },
}) => {
  return (
    <div className={classNameSet} style={{ position: "relative" }}>
      <ImageComponent2 {...setImage} />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <ButtonComponent1 {...setButton} />
      </div>
    </div>
  )
}

export default SupportCardComponent4
