import DeleteFavoriteComponent16 from "../../component_combine/16_delete_favorite/16_delete_favorite.component";
import "./FavoriteIdol.css";
import "../26_SelectableIdolList/SelectableIdolList.css";
import "../../component_combine/25_AddFavoriteIdol/AddFavoriteIdol.css";
import { useState, useEffect } from "react";

function FavoriteIdol({ favoriteIdols, setFavoriteIdols }) {
  // 아이돌 제거 함수: 상태 및 localStorage 동기화
  const handleRemove = (id) => {
    const updated = favoriteIdols.filter((idol) => idol.id !== id);
    setFavoriteIdols(updated); // props 상태 갱신
    localStorage.setItem("favoriteIdols", JSON.stringify(updated));
  };

  // 반응형 이미지 크기 조정
  const [imageSize, setImageSize] = useState("98px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) {
        setImageSize("70px");
      } else {
        setImageSize("98px");
      }
    };

    handleResize(); // 초기 적용
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="FavoriteIdol-section">
      <h2 className="mypage-title">내가 관심있는 아이돌</h2>

      <div className="FavoriteIdol-list">
        {favoriteIdols.map((idol) => (
          <div key={idol.id} className="FavoriteIdol-card">
            <DeleteFavoriteComponent16
              src={idol.profilePicture}
              alt={idol.name}
              width={imageSize}
              height={imageSize}
              onRemove={() => handleRemove(idol.id)}
            />
            <div className="idollist-info">
              <p className="idollist-name">{idol.name.split(" ").pop()}</p>
              <p className="idollist-group">{idol.group}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteIdol;
