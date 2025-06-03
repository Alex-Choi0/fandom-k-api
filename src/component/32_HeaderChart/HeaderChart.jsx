import "./HeaderChart.css";
import SupportCardComponent4 from "../../component_combine/4_support_card/4_support_card.component";
import Chart from "../../assets/icon/Chart.svg";

function HeaderChart() {
  return (
    <div className="HeaderChart">
      <h2>이달의 차트</h2>

      <SupportCardComponent4
        setImage={{
          src: "",
          alt: "blank",
          width: "100%",
          height: "0px",
          backgroundColor: "transparent",
          border: "none",
          objectFit: "cover",
          maskImage: "none",
          padding: "0",
          borderRadius: "0",
        }}
        setButton={{
          classNameSet: "ChartVoteBtn",
          width: "150px",
          height: "38px",
          btnName: (
            <span>
              <img className="ChartImg" src={Chart} alt="차트 로고" />
              차트 투표하기
            </span>
          ),
          bgColor: "#828282",
          gradient: ["#F86F65", "#FE5493"],
          textColor: "#fff",
          padding: "0 0",
          borderRadius: "3px",
          fontSize: "14px",
          border: "none",
        }}
      />
    </div>
  );
}

export default HeaderChart;
