import HeaderNav from "../../component/10_header_nav/header_nav"; //상단
import CreditBox from "../18_credit_box/credit_box"; //크레딧 박스
import BoostIdols from "../30_boost_idols/boost_idols"; //아이돌 후원
import ChartPage from "../31_chart_page/chart_page"; // 아이돌 순위 차트

function ListPage() {
  return (
    <>
      <HeaderNav />
      <CreditBox />
      <BoostIdols />
      <ChartPage />
    </>
  );
}

export default ListPage;
