import fandomKImage from "../../assets/image/landingPage/Fandom-K.png"
import ButtonComponent1 from "../../component/1_button/1_button.component"
import ImageComponent2 from "../../component/2_image/2_image.component"
import TextComponent8 from "../../component/8_text/8_text.component"
import "./39_landing_page.style.css"

const LandingPageComponent39 = () => {
  return (
    <div className="firstLandingPage">
      <TextComponent8
        text="내가 좋아하는 아이돌을"
        fontSize="26px"
        textColor="#FFFFFF"
        height="auto"
        // width="auto"
      />
      <div className="next-word">
        <TextComponent8
          text="가장 "
          fontSize="26px"
          textColor="#FFFFFF"
          height="auto"
          width="auto"
        />
        <TextComponent8
          text="&nbsp;쉽게 덕질 "
          fontSize="26px"
          textColor="#F96D69"
          height="auto"
          width="auto"
        />
        <TextComponent8
          text="&nbsp;하는 방법"
          fontSize="26px"
          textColor="#FFFFFF"
          height="auto"
          width="auto"
        />
      </div>

      <ImageComponent2
        src={fandomKImage}
        border="none"
        width="700px"
        height="auto"
        maskImage="none"
      />
      <ButtonComponent1
        btnName="지금 시작하기"
        width="477px"
        height="48px"
        classNameSet="landing-page-btn"
        position="relative"
      />
    </div>
  )
}

export default LandingPageComponent39
