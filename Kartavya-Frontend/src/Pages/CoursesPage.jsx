import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Courses from "../Components/Courses";

function CoursesPage() {
    return (
        <div className="min-h-screen bg-brand-surface flex flex-col">
            <div className="flex-grow">
                <Courses />
            </div>
        </div>
    );
}

export default CoursesPage;
