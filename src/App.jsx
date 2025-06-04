import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageRoute38 from "./routes/38_landing_page/38_landing_page.route";
import MyPage from "./component_combine/46_MyPage/MyPage";

const App = () => {
  return (
    <Routes>
      <Route index={true} path="/" element={<LandingPageRoute38 />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
