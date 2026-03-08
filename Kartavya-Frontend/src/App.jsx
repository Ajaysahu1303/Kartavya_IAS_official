import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import CurrentAffairs from "./Components/CurrentAffairs";
import About from "./Components/About";
import Founder from "./Components/Founder";
import Enroll from "./Components/Enroll";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <CurrentAffairs />
        <About />
        <Founder />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}
export default App;