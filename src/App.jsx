import "./App.css";
import HeaderNav from "./component/10_HeaderNav/HeaderNav";
import CreditBox from "./component_combine/18_CreditBox/CreditBox";
import BoostIdols from "./component_combine/30_BoostIdols/BoostIdols";
import ChartPage from "./component_combine/31_ChartPage/ChartPage";
// import testImage from "./assets/image/test_image2.png"

const App = () => {
  return (
    <>
      <HeaderNav />
      <CreditBox />
      <BoostIdols />
      <ChartPage />
    </>
  );
};

export default App;
