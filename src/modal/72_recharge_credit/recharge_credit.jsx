import { useState } from "react"
import creditImage from "../../assets/icon/credit.svg"
import creditBlankImage from "../../assets/svg/credit.svg"
import ImageComponent2 from "../../component/2_image/2_image.component"
import ModalFrame from "../../component/51_ModalFrame/ModalFrame"
import { useCreditContext } from "../../context/52_credit_context/credit_context"
import "./recharge_credit.css"

function RechargeCredit({ onClose, idol, subtitle, title }) {
  const [selected, setSelected] = useState("100")
  const { credit, addCredit } = useCreditContext()

  console.log("open modal RechargeCredit selected : ", selected)

  // 충전 처리 함수
  const handelRechargeCredit = () => {
    const credit = parseInt(selected, 10)
    addCredit(credit)
    onClose()
  }

  return (
    <>
      <ModalFrame title="크레딧 충전하기" onClose={onClose}>
        <div
          className="single-recharge"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          <div class="radio-group">
            <div
              className={`recharge-credit set100 ${
                selected === "100" ? "selected" : ""
              }`}
              onClick={() => setSelected("100")}
            >
              <div className="credit-count set100">
                <ImageComponent2 src={creditImage} border="none" />
                <span>100</span>
              </div>
              <input
                type="radio"
                id="radio1"
                name="choice"
                checked={selected === "100"}
                onChange={() => setSelected("100")}
                style={{ display: "none" }}
              />
              <label for="radio1"></label>
            </div>
            <div
              className={`recharge-credit set500 ${
                selected === "500" ? "selected" : ""
              }`}
              onClick={() => setSelected("500")}
            >
              <div className="credit-count set500">
                <ImageComponent2 src={creditImage} border="none" />
                <span>500</span>
              </div>
              <input
                type="radio"
                id="radio2"
                name="choice"
                checked={selected === "500"}
                onChange={() => setSelected("500")}
                style={{ display: "none" }}
              />
              <label for="radio2"></label>
            </div>
            <div
              className={`recharge-credit set1000 ${
                selected === "1000" ? "selected" : ""
              }`}
              onClick={() => setSelected("1000")}
            >
              <div className="credit-count set1000">
                <ImageComponent2 src={creditImage} border="none" />
                <span>1000</span>
              </div>
              <input
                type="radio"
                id="radio3"
                name="choice"
                checked={selected === "1000"}
                onChange={() => setSelected("1000")}
                style={{ display: "none" }}
              />
              <label for="radio3"></label>
            </div>
          </div>
          <button
            className="chargeCredit-btn"
            onClick={() => handelRechargeCredit()}
          >
            <img
              src={creditBlankImage}
              alt="credit"
              style={{ width: "30px" }}
            />
            충전하기
          </button>
        </div>
      </ModalFrame>
    </>
  )
}
export default RechargeCredit
