import { useEffect, useState } from "react";
import "./idols_chart.css";
import { FindIdolsCharts20 } from "../../utils/api/api";
import ImageComponent2 from "../2_image/2_image.component"; // 동그란 이미지 생성
import LoadingChart from "../34_loading_chart/loading_chart"; //더보기 버튼 연결

function IdolsChart({ gender, setGender }) {
  const [chartList, setChartList] = useState([]); // 차트
  const [cursor, setCursor] = useState(null); // 다음 페이지
  const [loading, setLoading] = useState(false); // 로딩
  const [showVoteModal, setShowVoteModal] = useState(false);
  const handleOpenVoteModal = () => setShowVoteModal(true);
  const handleCloseVoteModal = () => setShowVoteModal(false); // 투표하기 모달

  const handleGenderChange = (newGender) => {
    if (gender === newGender) return; // 다시 클릭해도 반응 X
    setGender(newGender); // 선택된 성별로 변경
    setChartList([]); // 기존 데이터 초기화
    setCursor(null);
  };

  useEffect(() => {
    fetchChartList();
  }, [gender]);

  const fetchChartList = async () => {
    const res = await FindIdolsCharts20("16-4", cursor, 10, gender);
    setChartList(res.idols);
    setCursor(res.nextCursor);
    setLoading(false);
    console.log("nextCursor:", res.nextCursor);
  };

  const handleLoadMore = async () => {
    if (!cursor || loading) return;
    setLoading(true);
    const res = await FindIdolsCharts20("16-4", cursor, 10, gender);
    setChartList((prev) => [...prev, ...res.idols]);
    setCursor(res.nextCursor);
    setLoading(false);
  };

  const leftList = chartList.filter((_, idx) => idx % 2 === 0); // 짝수: 왼쪽 열
  const rightList = chartList.filter((_, idx) => idx % 2 === 1); // 홀수: 오른쪽 열

  return (
    <div className="ChartBtn-container">
      <div className="ChartBtn">
        <button
          className={gender === "female" ? "active" : ""}
          onClick={() => handleGenderChange("female")}
        >
          이달의 여자 아이돌
        </button>
        <button
          className={gender === "male" ? "active" : ""}
          onClick={() => handleGenderChange("male")}
        >
          이달의 남자 아이돌
        </button>
      </div>

      {/*차트 출력*/}
      <div className="chart-container">
        <div className="chart-list">
          <div className="chart-left">
            {leftList.map((idol, i) => (
              <IdolItem
                key={idol.id}
                data={idol}
                rank={i * 2 + 1}
                onVoteClick={handleOpenVoteModal}
              />
            ))}
          </div>
          <div className="chart-right">
            {rightList.map((idol, i) => (
              <IdolItem
                key={idol.id}
                data={idol}
                rank={i * 2 + 2}
                onVoteClick={handleOpenVoteModal}
              />
            ))}
          </div>
        </div>
      </div>
      <LoadingChart
        onClick={handleLoadMore}
        isVisible={!!cursor}
        isLoading={loading}
      />
    </div>
  );
}

const IdolItem = ({ data, rank, onVoteClick }) => {
  return (
    <div className="idol-item" onClick={onVoteClick}>
      <ImageComponent2
        src={data.profilePicture}
        alt={data.name}
        width="80px"
        height="80px"
        borderRadius="50%"
        objectFit="cover"
        border="2px solid #F96D69"
      />
      <div className="idol-info">
        <span className="rank">{rank}</span> {/*랭크*/}
        <span className="idol-name">{data.name}</span> {/*아이돌 이름*/}
      </div>
      <span className="idol-votes">{data.totalVotes.toLocaleString()}표</span>
      {/*표 수*/}
    </div>
  );
};

export default IdolsChart;
