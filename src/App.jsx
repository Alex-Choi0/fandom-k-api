import { useEffect, useState } from "react";
import "./App.css";
import HeaderNav from "./component/10_HeaderNav/HeaderNav.jsx";
import FavoriteIdol from "./component/27_FavoriteIdol/FavoriteIdol.jsx";
import AddFavoriteIdol from "./component_combine/25_AddFavoriteIdol/AddFavoriteIdol.jsx";

const App = () => {
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
      <FavoriteIdol
        favoriteIdols={favoriteIdols}
        setFavoriteIdols={setFavoriteIdols}
      />
      <hr className="section-divider" />
      <AddFavoriteIdol
        favoriteIdols={favoriteIdols}
        setFavoriteIdols={setFavoriteIdols}
      />
    </>
  );
};

export default App;
