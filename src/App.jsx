import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageRoute38 from "./routes/38_landing_page/38_landing_page.route";
import MyPage from "./component_combine/46_MyPage/MyPage";
import LandingPageRoute55 from "./routes/55_list_page/55_list_page.route";

const App = () => {
  return (
    <Routes>
      <Route index={true} path="/" element={<LandingPageRoute38 />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route index={true} path="/list" element={<LandingPageRoute55 />} />
    </Routes>
  );
};

export default App;
