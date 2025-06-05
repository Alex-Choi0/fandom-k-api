import { useEffect, useState } from "react";
import "../../App.css";
import "./MyPage.css";
import HeaderNav from "../../component/10_header_nav/header_nav.jsx";
import FavoriteIdol from "../../component/27_favoriteIdol/FavoriteIdol.jsx";
import AddFavoriteIdol from "../25_AddFavoriteIdol/AddFavoriteIdol.jsx";

const MyPage = () => {
  const [favoriteIdols, setFavoriteIdols] = useState([]);

  // 처음 마운트 시 localStorage에서 불러오기
  useEffect(() => {
    const stored = localStorage.getItem("favoriteIdols");
    if (stored) {
      setFavoriteIdols(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <HeaderNav />
      <div className="mypage-root">
        <FavoriteIdol
          favoriteIdols={favoriteIdols}
          setFavoriteIdols={setFavoriteIdols}
        />
        <hr className="section-divider" />
        <AddFavoriteIdol
          favoriteIdols={favoriteIdols}
          setFavoriteIdols={setFavoriteIdols}
        />
      </div>
    </>
  );
};

export default MyPage;
