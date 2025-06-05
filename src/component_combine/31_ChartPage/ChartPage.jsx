import "./ChartPage.css";
import HeaderChart from "../../component/32_HeaderChart/HeaderChart"; //차트 상단 바
import IdolsChart from "../../component/33_IdolsChart/IdolsChart"; // 차트 리스트
import LoadingChart from "../../component/34_LoadingChart/LoadingChart"; // 더보기 버튼

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
