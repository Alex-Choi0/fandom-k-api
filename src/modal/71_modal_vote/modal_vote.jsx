import { useEffect, useState } from "react";
import axios from "axios";
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component";
import ModalFrame from "../../component/51_ModalFrame/ModalFrame.jsx";
import ModalPortal from "../66_modal_portal/modal_portal";
import ModalLackCredit from "../63_modal_lack_credit/modal_lack_credit";
import ButtonComponent1 from "../../component/1_button/1_button.component";
import CheckedFalse from "../../assets/icon/checked-false.svg";
import CheckedTrue from "../../assets/icon/checked-true.svg";
import { FindIdolsCharts20 } from "../../utils/api/api";
import { useCreditContext } from "../../context/52_credit_context/credit_context";
import "./modal_vote.css";

const ModalVote = ({ gender, onClose, onSuccess }) => {
  const [idolList, setIdolList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showLackModal, setShowLackModal] = useState(false);
  const { credit, useCredit, setCredit } = useCreditContext();

  /* 크레딧 부족 테스트
  useEffect(() => {
    setCredit(500); // 테스트용 설정
  }, []);
  */

  // 아이돌 불러오기 + 성별 필터링
  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const res = await FindIdolsCharts20("16-4", null, 20, gender);
        console.log(res.idols);
        const list = res?.idols || [];
        setIdolList(list);
      } catch (err) {
        console.error("아이돌 불러오기 실패:", err);
      }
    };

    fetchIdols();
  }, [gender]);

  // 투표 실행
  const handleVote = async () => {
    if (!selectedId) {
      alert("아이돌을 선택해주세요!");
      return;
    }

    if (credit < 1000) {
      setShowLackModal(true);
      return;
    }

    try {
      // 서버에 POST 요청 보내기
      const res = await axios.post(
        "https://fandom-k-api.vercel.app/16-4/votes",
        {
          idolId: selectedId,
        }
      );

      const votedIdol = res.data.idol;

      // 크레딧 차감
      useCredit(1000);

      // 프론트 상태 업데이트
      const updatedList = idolList.map((idol) => {
        if (idol.id === votedIdol.id) {
          return {
            ...votedIdol, // 서버 응답으로 최신 totalVotes 반영
          };
        }
        return idol;
      });
      setIdolList(updatedList);

      // 완료 알림 및 모달 닫기
      alert("투표가 완료되었습니다!");
      if (onSuccess) onSuccess(); // 리스트 새로고침
      onClose(); // 모달 닫기
    } catch (err) {
      console.error("투표 실패:", err);
      alert("투표 중 오류가 발생했습니다!");
    }
  };

  return (
    <>
      <ModalFrame
        title={`이달의 ${gender === "female" ? "여자" : "남자"} 아이돌`}
        onClose={onClose}
      >
        <div className="idol-vote-list">
          {idolList.map((idol) => (
            <div key={idol.id}>
              <div
                className="idol-vote-item"
                onClick={() =>
                  setSelectedId((prev) => (prev === idol.id ? null : idol.id))
                }
              >
                <div className="idol-vote-item-left">
                  <CheckedImage11
                    src={idol.profilePicture}
                    alt={idol.name}
                    width="70px"
                    height="70px"
                    status={selectedId === idol.id}
                  />
                  <span className="idol-vote-rank">{idol.rank}</span>
                  <div className="idol-vote-info">
                    <p className="idol-vote-name">{idol.name}</p>
                    <p className="idol-vote-count">
                      {idol.totalVotes?.toLocaleString() ?? "0"}표
                    </p>
                  </div>
                </div>
                <div className="idol-vote-item-right">
                  <img
                    src={selectedId === idol.id ? CheckedTrue : CheckedFalse}
                    alt="check"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <ButtonComponent1
          btnName="투표하기"
          onClick={handleVote}
          fontSize="14px"
          width="100%"
          height="48px"
        />
        <p className="vote-description">
          투표하는 데{" "}
          <span style={{ color: "#F86F65", fontWeight: "bold" }}>
            1000 크레딧
          </span>
          이 소모됩니다.
        </p>
      </ModalFrame>

      {showLackModal && (
        <ModalPortal>
          <ModalLackCredit onClose={() => setShowLackModal(false)} />
        </ModalPortal>
      )}
    </>
  );
};

export default ModalVote;
