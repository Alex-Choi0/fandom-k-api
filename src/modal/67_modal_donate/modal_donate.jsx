import "./modal_donate.css";
import { useState } from "react";
import { useCreditContext } from "../../context/52_credit_context/credit_context";
import ModalPortal from "../66_modal_portal/modal_portal";
import ModalLackCredit from "../63_modal_lack_credit/modal_lack_credit";
import ButtonComponent1 from "../../component/1_button/1_button.component";
import ModalFrame from "../../component/51_ModalFrame/ModalFrame";
import CreditIcon from "../../assets/icon/credit.svg";

function ModalDonate({ onClose, item, updateItem }) {
  const idol = item.idol;
  const title = item.title;
  const subtitle = item.subtitle;
  const [inputValue, setInputValue] = useState(""); //입력값
  const [showLackModal, setShowLackModal] = useState(false); //부족할 경우 띄우는 모달
  const { credit, useCredit } = useCreditContext(); // 현재 크래딧 상태 + 차감 함수(후원 시)

  // 입력된 값이 보유 크레딧 초과 확인
  const overCredit = parseInt(inputValue, 10) > credit;

  /* 후원 처리 함수 */
  const handleDonate = () => {
    const amount = parseInt(inputValue, 10);
    if (!amount || isNaN(amount)) return;
    if (credit < amount) {
      setShowLackModal(true);
    } else {
      useCredit(amount); // localStorage 크레딧 차감
      updateItem(amount); // 상위 컴포넌트의 상태 업데이트
      onClose();
    }
  };

  return (
    <>
      <ModalFrame
        title="후원하기"
        titleStyle="default"
        paddingSize="compact"
        onClose={onClose}
      >
        {/* 이미지 + 타이틀*/}
        <div className="donate-modal-header">
          <img
            className="donate-modal-image"
            src={idol?.profilePicture}
            alt={idol?.name}
          />
          <div className="donate-modal-text">
            <p className="donate-modal-subtitle">{subtitle}</p>
            <p className="donate-modal-title">{title}</p>
          </div>
        </div>

        {/* 크레딧 입력창 + 아이콘*/}
        <div
          className={`donate-modal-input ${
            overCredit ? "donate-input-error" : ""
          }`}
        >
          <input
            className="donate-credit-input"
            type="text"
            placeholder="크레딧 입력"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <img
            className="donate-credit-icon"
            src={CreditIcon}
            alt="크레딧 아이콘"
          />
        </div>

        {/*초과 시 경고 문구 표시 */}
        {overCredit && (
          <p className="donate-error-text">
            갖고 있는 크레딧보다 더 많이 후원할 수 없어요
          </p>
        )}

        {/* 버튼 */}
        <ButtonComponent1
          btnName="후원하기"
          onClick={handleDonate}
          fontSize="18px"
          width="100%"
          height="48px"
          disabled={inputValue.trim() === ""}
          classNameSet={
            inputValue.trim() === "" ? "donate-button-disabled" : ""
          }
        />
      </ModalFrame>

      {/* 크레딧 부족 시 모달 */}
      {showLackModal && (
        <ModalPortal>
          {/* 포탈 | DOM 외부에서 렌더링 */}
          <ModalLackCredit onClose={() => setShowLackModal(false)} />
        </ModalPortal>
      )}
    </>
  );
}
export default ModalDonate;
