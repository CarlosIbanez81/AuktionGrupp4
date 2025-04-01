import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/Landingpage";
import CreateAuction from "./pages/createauction/CreateAuction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-auction" element={<CreateAuction />} />
      </Routes>
    </Router>
  );
}

export default App;