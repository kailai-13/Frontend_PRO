import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // We will need navigate for button redirects

function Home() {
    const navigate = useNavigate(); // Hook to navigate between pages

    // Navigate to Admin login
    const goToAdminLogin = () => {
        navigate("/admin/login");
    };

    // Navigate to Student login
    const goToStudentLogin = () => {
        navigate("/student/login");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 to-gray-400">
            <nav className="fixed w-full">
                <Navbar />
            </nav>

            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-3xl font-bold text-blue-500 mb-5">Welcome to the App</h1>
                <p className="text-lg text-center mt-2 mb-10">Choose your role to log in</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={goToAdminLogin}
                        className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg mb-4 sm:mb-0 transition-all duration-300 transform hover:bg-blue-700 hover:scale-105"
                    >
                        Admin Login
                    </button>

                    <button
                        onClick={goToStudentLogin}
                        className="px-8 py-3 bg-green-500 text-white rounded-lg text-lg mb-4 sm:mb-0 transition-all duration-300 transform hover:bg-green-700 hover:scale-105"
                    >
                        Student Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
