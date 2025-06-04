import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageRoute38 from "./routes/38_landing_page/38_landing_page.route";
import MyPage from "./component_combine/46_MyPage/MyPage";
import ListPage from "./component_combine/47_ListPage/ListPage"; // 목록 페이지

const App = () => {
  return (
    <Routes>
      <Route index={true} path="/" element={<LandingPageRoute38 />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route index={true} path="/list" element={<ListPage />} />
    </Routes>
  );
};

export default App;
