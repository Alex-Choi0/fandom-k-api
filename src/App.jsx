
import { Route, Routes } from "react-router-dom"
import "./App.css"
import LandingPageRoute38 from "./routes/38_landing_page/38_landing_page.route"

const App = () => {
  return (
    <Routes>
      <Route index={true} path="/" element={<LandingPageRoute38 />} />
    </Routes>
  )
}

export default App
