import { useState } from "react"
import ModalPortal from "../../modal/66_modal_portal/modal_portal"
import RechargeCredit from "../../modal/72_recharge_credit/recharge_credit.jsx"
import "./credit_charge.css"

function CreditCharge() {
  const [checked, checkedSetting] = useState(false)

  const setChecked = (bool) => {
    console.log("setChecked bool : ", bool)
    checkedSetting(bool)
  }

  return (
    <>
      <button className="CreditCharge-button" onClick={() => setChecked(true)}>
        충전하기
      </button>
      {checked && (
        <ModalPortal>
          <RechargeCredit onClose={() => setChecked(false)}></RechargeCredit>
        </ModalPortal>
      )}
    </>
  )
}

export default CreditCharge
