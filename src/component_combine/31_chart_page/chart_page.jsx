import "./chart_page.css";
import HeaderChart from "../../component/32_header_chart/header_chart"; //차트 상단 바
import IdolsChart from "../../component/33_idols_chart/idols_chart"; // 차트 리스트
import LoadingChart from "../../component/34_loading_chart/loading_chart"; // 더보기 버튼
import ModalPortal from "../../modal/66_modal_portal/modal_portal";
import ModalVote from "../../modal/71_modal_vote/modal_vote";
import ModalVoteMobile from "../../modal/71_modal_vote/modal_vote_mobile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChartPage() {
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [gender, setGender] = useState("female"); // 기본 성별 (차트 기준)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375); // 모바일 : 투표하기 모달이 아닌 페이지로 이동
  const navigate = useNavigate();

  const handleOpenVoteModal = () => {
    if (isMobile) {
      navigate("/vote", { state: { gender } }); // 모바일은 페이지 이동
    } else {
      setShowVoteModal(true); // 데스크탑, 태블릿은 모달 오픈
    }
  };
  const handleCloseVoteModal = () => setShowVoteModal(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ChartPage">
      {/* 투표 버튼 클릭 시 모달 오픈 */}
      <HeaderChart onVoteClick={handleOpenVoteModal} gender={gender} />

      {/* 성별을 IdolsChart에서 변경할 수 있다면, 성별도 여기서 관리하도록 리팩터링 가능 */}
      <IdolsChart gender={gender} setGender={setGender} />

      <LoadingChart />

      {showVoteModal &&
        (isMobile ? (
          <ModalVoteMobile gender={gender} onClose={handleCloseVoteModal} />
        ) : (
          <ModalPortal>
            <ModalVote gender={gender} onClose={handleCloseVoteModal} />
          </ModalPortal>
        ))}
    </div>
  );
}

export default ChartPage;
