import { useState } from "react";
import { useCreditContext } from "../../context/52_credit_context/credit_context";
import ModalPortal from "../66_modal_portal/modal_portal";
import ModalLackCredit from "../63_modal_lack_credit/modal_lack_credit";
import ButtonComponent1 from "../../component/1_button/1_button.component";
import ModalFrame from "../../component/51_ModalFrame/ModalFrame";
import CreditIcon from "../../assets/icon/credit.svg";

function ModalDonate({ onClose, idol, subtitle, title }) {
  const [inputValue, setInputValue] = useState(""); //입력값
  const [showLackModal, setShowLackModal] = useState(false); //부족할 경우 띄우는 모달
  const { credit, useCredit } = useCreditContext(); // 현재 크래딧 상태 + 차감 함수(후원 시)

  /* 후원 처리 함수 */
  const handleDonate = () => {
    const amount = parseInt(inputValue, 10);

    if (!amount || isNaN(amount)) return;
    if (credit < amount) {
      setShowLackModal(true); // 부족 모달 띄움
    } else {
      useCredit(amount); //크레딧 차감
      onClose();
    }
  };

  return (
    <>
      <ModalFrame title="후원하기" onClose={onClose}>
        {/* 이미지 + 타이틀*/}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img
            src={idol?.profilePicture}
            alt={idol?.name}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p style={{ marginTop: "8px", color: "#ccc", fontSize: "14px" }}>
            {subtitle}
          </p>
          <p style={{ fontWeight: "bold", color: "#fff", fontSize: "16px" }}>
            {title}
          </p>
        </div>

        {/* 크레딧 입력창 + 아이콘*/}
        <div>
          <img src={CreditIcon} alt="크레딧 아이콘" width="20" height="20" />
          <input
            type="number"
            placeholder="크레딧 입력"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {/* 버튼 + 부족 모달*/}
        <ButtonComponent1
          btnName="후원하기"
          onClick={handleDonate}
          fontSize="14px"
          width="100%"
          height="48px"
        />
      </ModalFrame>

      {/* 크레딧 부족 시 모달 */}
      {showLackModal && (
        <ModalPortal>
          {" "}
          {/* 포탈 | DOM 외부에서 렌더링 */}
          <ModalLackCredit onClose={() => setShowLackModal(false)} />
        </ModalPortal>
      )}
    </>
  );
}
export default ModalDonate;
