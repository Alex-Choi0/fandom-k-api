import "./CreditBox.css";
import MyCredit from "../../component/13_MyCredit/MyCredit";
import CreditCharge from "../../component/17_CreditCharge/CreditCharge";

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
