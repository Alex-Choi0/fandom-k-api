import "./AddFavoriteIdol.css";
import Button from "../../component/1_button/1_button.component";
import iconPlus from "../../assets/icon/plus.svg";
import SelectableIdolList from "../../component/26_SelectableIdolList/SelectableIdolList.jsx";
import { useState } from "react";

function AddFavoriteIdol() {
  const [selectedIds, setSelectedIds] = useState([]); // ✅ 요거 추가

  const handleToggle = (idolId) => {
    setSelectedIds((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
  };

  return (
    <div className="AddFavoriteIdol-section">
      <h2 className="AddFavoriteIdol-name">관심 있는 아이돌을 추가해보세요.</h2>

      {/* ✅ 아이돌 목록 렌더링 */}
      <SelectableIdolList selectedIds={selectedIds} onToggle={handleToggle} />

      {/* ✅ 버튼은 아래 유지 */}
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
      />
    </div>
  );
}

export default AddFavoriteIdol;
