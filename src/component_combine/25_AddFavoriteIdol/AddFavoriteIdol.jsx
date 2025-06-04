import Button from "../../component/1_button/1_button.component";
import iconPlus from "../../assets/icon/plus.svg";
import SelectableIdolList from "../../component/26_SelectableIdolList/SelectableIdolList.jsx";
import { useEffect, useState } from "react";
import { FindIdols19 } from "../../utils/api/api";

function AddFavoriteIdol({ favoriteIdols, setFavoriteIdols }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [idolList, setIdolList] = useState([]);
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const res = await FindIdols19("16-4", null, 50, null);
        setIdolList(res.list);
      } catch (err) {
        console.error("아이돌 목록 불러오기 실패", err);
      }
    };

    fetchIdols();
  }, []);

  /* 스와이프 테스트용
  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const res = await FindIdols19("16-4", null, 100, null);
        const original = res.list;

        // 페이지 수 확보를 위해 데이터 늘리기
        const repeated = Array(5).fill(original).flat(); // 5배로 늘림

        setIdolList(repeated);
      } catch (err) {
        console.error("아이돌 목록 불러오기 실패", err);
      }
    };

    fetchIdols();
  }, []); */

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) setCardWidth(328);
      else if (width <= 744) setCardWidth(584);
      else setCardWidth(1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (idolId) => {
    setSelectedIds((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
  };

  const handleAddFavorite = () => {
    const selectedIdols = idolList.filter((idol) =>
      selectedIds.includes(idol.id)
    );

    const newIdols = selectedIdols.filter(
      (idol) => !favoriteIdols.some((item) => item.id === idol.id)
    );

    if (newIdols.length === 0) return alert("이미 추가된 아이돌입니다!");

    const updated = [...favoriteIdols, ...newIdols];
    setFavoriteIdols(updated);
    localStorage.setItem("favoriteIdols", JSON.stringify(updated));
    alert("아이돌이 추가되었습니다!");
    setSelectedIds([]);
  };

  return (
    <div className="AddFavoriteIdol-section">
      <h2 className="mypage-title">관심 있는 아이돌을 추가해보세요.</h2>

      <SelectableIdolList
        idolList={idolList}
        selectedIds={selectedIds}
        onToggle={handleToggle}
        cardWidth={cardWidth}
      />

      <Button
        className="AddFavoriteIdol-button"
        btnName={
          <>
            <img src={iconPlus} alt="+" className="icon-plus" />
            추가하기
          </>
        }
        width="255px"
        height="48px"
        borderRadius="24px"
        fontSize="16px"
        fontWeight="700"
        onClick={handleAddFavorite}
      />
    </div>
  );
}

export default AddFavoriteIdol;
