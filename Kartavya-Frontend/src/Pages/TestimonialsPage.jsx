import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-brand-surface flex flex-col">
            <div className="flex-grow">
                <Testimonials />
            </div>
        </div>
    );
}

export default TestimonialsPage;
