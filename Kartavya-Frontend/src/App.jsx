import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DemoPage from "./Pages/DemoPage";
import NotFound from "./Pages/NotFound";
import AboutPage from "./Pages/AboutPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import CoursesPage from "./Pages/CoursesPage";
import ScrollToTop from "./Components/ScrollToTop";
import Enroll from "./Components/Enroll";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuizPage from "./Pages/QuizPage";
import DemoPdfsPage from "./Pages/DemoPdfsPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import BetiyanPage from "./Pages/BetiyanPage";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/demo-pdfs" element={<DemoPdfsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/betiyon-ki-padhai" element={<BetiyanPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<Enroll />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;