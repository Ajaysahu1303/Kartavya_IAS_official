import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DemoPage from "./Pages/DemoPage";
import QuizPage from "./Pages/QuizPage";
import LocationPage from "./Pages/LocationPage";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/location/:branchId" element={<LocationPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;