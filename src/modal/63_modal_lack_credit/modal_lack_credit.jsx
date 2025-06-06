import ModalFrame from "../../component/51_ModalFrame/ModalFrame"; //모달 프레임
import CreditIcon from "../../assets/icon/credit.svg";
import ButtonComponent1 from "../../component/1_button/1_button.component";
import "./modal_lack_credit.css";

function ModalLackCredit({ onClose }) {
  return (
    <ModalFrame onClose={onClose} paddingSize="default" titleStyle="light">
      <div className="lack-credit-body">
        <img
          src={CreditIcon}
          alt="크레딧 아이콘"
          className="lack-credit-icon"
        />
        <p className="lack-credit-text">
          앗! 투표하기 위한 <span style={{ color: "#f96d69" }}> 크레딧</span>이
          부족해요
        </p>
        <ButtonComponent1
          btnName="확인"
          gradient={["rgba(248, 111, 101, 1)", "rgba(254, 84, 147, 1)"]}
          fontSize="13px"
          width="100%"
          height="38px"
          borderRadius="4px"
          padding="10px 0"
          onClick={onClose}
        />
      </div>
    </ModalFrame>
  );
}

export default ModalLackCredit;
