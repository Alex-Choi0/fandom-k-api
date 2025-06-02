import { useEffect, useState } from "react";
import "./App.css";


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
<h1> 메인페이지</h1>
    </>
  );
};

export default App;
