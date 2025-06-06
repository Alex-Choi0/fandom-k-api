import "./my_credit.css";
import CreditDisplay from "../62_credit_display/credit_display";

function MyCredit() {
  return (
    <div className="MyCredit">
      <p className="MyCredit-name">내 크레딧</p>
      <CreditDisplay />
    </div>
  );
}

export default MyCredit;
