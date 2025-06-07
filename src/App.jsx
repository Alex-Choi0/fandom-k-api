import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPageRoute38 from "./routes/38_landing_page/38_landing_page.route";
import MyPage from "./component_combine/46_MyPage/MyPage";
import LandingPageRoute55 from "./routes/55_list_page/55_list_page.route";
import { CreditProvider } from "./context/52_credit_context/credit_context";
import ModalVoteMobile from "./modal/71_modal_vote/modal_vote_mobile";

const App = () => {
  return (
    <CreditProvider>
      <Routes>
        <Route index={true} path="/" element={<LandingPageRoute38 />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route index={true} path="/list" element={<LandingPageRoute55 />} />
        <Route path="/vote" element={<ModalVoteMobile />} />
      </Routes>
    </CreditProvider>
  );
};

export default App;
