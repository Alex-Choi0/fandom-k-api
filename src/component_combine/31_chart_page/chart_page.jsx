import "./chart_page.css";
import HeaderChart from "../../component/32_header_chart/header_chart";
import IdolsChart from "../../component/33_idols_chart/idols_chart";
import LoadingChart from "../../component/34_loading_chart/loading_chart";
import ModalPortal from "../../modal/66_modal_portal/modal_portal";
import ModalVote from "../../modal/71_modal_vote/modal_vote";
import ModalVoteMobile from "../../modal/71_modal_vote/modal_vote_mobile";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChartPage() {
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [gender, setGender] = useState("female");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const location = useLocation();

  const handleOpenVoteModal = () => {
    if (isMobile) {
      navigate("/vote", { state: { gender } });
    } else {
      setShowVoteModal(true);
    }
  };

  const handleCloseVoteModal = () => setShowVoteModal(false);

  const handleVoteSuccess = () => {
    chartRef.current?.refreshChartList?.(); // 안전하게 호출
    setShowVoteModal(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.state?.shouldRefresh) {
      chartRef.current?.refreshChartList?.();
      window.history.replaceState({}, ""); // 뒤로가기해도 다시 새로고침 안 되게 초기화
    }
  }, [location.state]);

  return (
    <div className="ChartPage">
      <HeaderChart onVoteClick={handleOpenVoteModal} gender={gender} />

      <IdolsChart gender={gender} setGender={setGender} ref={chartRef} />

      <LoadingChart />

      {showVoteModal &&
        (isMobile ? (
          <ModalVoteMobile gender={gender} onClose={handleCloseVoteModal} />
        ) : (
          <ModalPortal>
            <ModalVote
              gender={gender}
              onClose={handleCloseVoteModal}
              onSuccess={handleVoteSuccess}
            />
          </ModalPortal>
        ))}
    </div>
  );
}

export default ChartPage;
