import { useCreditContext } from "../../context/52_credit_context/credit_context";
import CreditIcon from "../../assets/icon/credit.svg";
import "./credit_display.css";

/* , */
const formatCredit = (amount) => {
  return amount.toLocaleString(); // Ex) 36,000
};

/* UI 렌더링 */
function CreditDisplay() {
  const { credit } = useCreditContext(); // context에서 credit 값 가져옴

  return (
    <div className="credit-display">
      <img src={CreditIcon} alt="크레딧 아이콘" />
      <span>{formatCredit(credit)}</span>
    </div>
  );
}

export default CreditDisplay;
