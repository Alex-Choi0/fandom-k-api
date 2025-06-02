import leftBtn from "../../assets/image/btn_left.svg";
import rightBtn from "../../assets/image/btn_right.svg";
import "./SliderNavigation.css";

const SliderNavigation = ({ direction = "left", onClick }) => {
  const isLeft = direction === "left"; // 왼쪽 여부
  const icon = isLeft ? leftBtn : rightBtn; // 이미지 선택

  return (
    <button
      className={`navButton ${isLeft ? "left" : "right"}`}
      onClick={onClick} //클릭 이벤트 핸들러
    >
      <img src={icon} alt={`${direction} 버튼`} />
    </button>
  );
};

export default SliderNavigation;
