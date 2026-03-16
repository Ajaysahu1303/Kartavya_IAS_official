import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Courses from "../Components/Courses";
import About from "../Components/About";
import Enroll from "../Components/Enroll";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Courses isHomePage={true} />
        <About />
      </main>
    </>
  );
}

export default HomePage;
