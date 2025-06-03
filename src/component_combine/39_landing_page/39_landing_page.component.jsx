import { Link } from "react-router-dom"
import fandomKImage from "../../assets/image/landingPage/Fandom-K.png"
import home1Image from "../../assets/image/landingPage/Home-1.png"
import home2Image from "../../assets/image/landingPage/Home-2.png"
import home3Image from "../../assets/image/landingPage/Home-3.png"
import ButtonComponent1 from "../../component/1_button/1_button.component"
import ImageComponent2 from "../../component/2_image/2_image.component"
import TextComponent8 from "../../component/8_text/8_text.component"
import "./39_landing_page.style.css"

const LandingPageComponent39 = () => {
  return (
    <>
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

        <div className="firstLandingPage-img">
          <ImageComponent2
            src={fandomKImage}
            border="none"
            width="100%"
            height="100%"
            maskImage="none"
          />
        </div>
        <div className="firstLandingPage-btn">
          <Link to="/list">
            <ButtonComponent1
              btnName="지금 시작하기"
              width="100%"
              height="48px"
              classNameSet="landing-page-btn"
              position="relative"
            />
          </Link>
        </div>
      </div>
      <div className="secondLandingPage">
        <div className="secondLandingFirst secondLandingClass">
          <div>
            <TextComponent8
              text="후원하기"
              fontSize="16px"
              textColor="#D2C030"
              height="auto"
              padding="10px 0"
              // width="auto"
            />
            <TextComponent8
              text="좋아하는 아이돌에게"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
            <TextComponent8
              text="쉽게 조공해 보세요"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
          </div>
          <ImageComponent2
            src={home1Image}
            maskImage="none"
            width="300px"
            border="none"
          />
        </div>
        <div className="secondLandingSecond secondLandingClass">
          <div>
            <TextComponent8
              text="이달의 아티스트"
              fontSize="16px"
              textColor="#D2C030"
              height="auto"
              padding="10px 0"
              // width="auto"
            />
            <TextComponent8
              text="내 아티스트에게 1등의"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
            <TextComponent8
              text="영예를 선물하세요"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
          </div>
          <ImageComponent2
            src={home2Image}
            maskImage="none"
            width="300px"
            border="none"
          />
        </div>
        <div className="secondLandingThird secondLandingClass">
          <div>
            <TextComponent8
              text="나만의 아티스트"
              fontSize="16px"
              textColor="#D2C030"
              height="auto"
              padding="10px 0"
              // width="auto"
            />
            <TextComponent8
              text="좋아하는 아티스트들의"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
            <TextComponent8
              text="소식을 모아보세요"
              fontSize="26px"
              textColor="#FFFFFF"
              height="auto"
              // width="auto"
            />
          </div>
          <ImageComponent2
            src={home3Image}
            maskImage="none"
            width="300px"
            border="none"
          />
        </div>
      </div>
    </>
  )
}

export default LandingPageComponent39
