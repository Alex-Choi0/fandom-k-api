import "./credit_box.css";
import MyCredit from "../../component/13_my_credit/my_credit";
import CreditCharge from "../../component/17_credit_charge/credit_charge";

function CreditBox() {
  return (
    <div className="CreditBox">
      <div className="CreditBox-left">
        <MyCredit />
      </div>
      <div className="CreditBox-right">
        <CreditCharge />
      </div>
    </div>
  );
}

export default CreditBox;
