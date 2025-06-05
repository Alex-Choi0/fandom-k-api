import "./chart_page.css";
import HeaderChart from "../../component/32_header_chart/header_chart"; //차트 상단 바
import IdolsChart from "../../component/33_idols_chart/idols_chart"; // 차트 리스트
import LoadingChart from "../../component/34_loading_chart/loading_chart"; // 더보기 버튼

function ChartPage() {
  return (
    <div className="ChartPage">
      <HeaderChart />
      <IdolsChart />
      <LoadingChart />
    </div>
  );
}

export default ChartPage;
