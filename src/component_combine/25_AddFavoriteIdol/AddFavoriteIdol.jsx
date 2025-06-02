import "./AddFavoriteIdol.css";
import Button from "../../component/1_button/1_button.component";
import iconPlus from "../../assets/icon/plus.svg";

function AddFavoriteIdol() {
  return (
    <div className="AddFavoriteIdol-section">
      <h2 className="AddFavoriteIdol-name">관심 있는 아이돌을 추가해보세요.</h2>
      <p>아이돌 목록</p>
      <Button
        className="AddFavoriteIdol-button"
        btnName={
          <>
            <img src={iconPlus} alt="+" className="icon-plus" />
            추가하기
          </>
        }
        width="255px"
        height="48px"
        borderRadius="24px"
        fontSize="16px"
        fontWeight="700"
      />
    </div>
  );
}

export default AddFavoriteIdol;
