import { FaWifi,FaUsers, FaTools, FaPhoneAlt } from "react-icons/fa"; // Add icons for sections
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
Navbar
function Home() {
    const navigate = useNavigate();

    const goToAdminLogin = () => {
        navigate("/admin/login");
    };

    const goToAdminRegister = () => {
        navigate("/admin/register");
    };

    const goToStudentLogin = () => {
        navigate("/student/login");
    };

    const goToStudentRegister = () => {
        navigate("/student/register");
    };

    return (
        <>
        <div className="flex flex-col sm:flex-row items-center justify-between h-screen bg-gradient-to-r from-gray-700 to-gray-400">
            <nav className="fixed z-50"><Navbar/></nav>
            <div className="flex flex-col items-center sm:items-start sm:mt-20 sm:ml-20  sm:w-1/2 gap-6">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:mt-auto mt-40 sm:grid-cols-2 gap-6 sm:w-full">
                    {/* Admin Section */}
                    <div className="flex flex-col items-center justify-center bg-cyan-500 text-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-cyan-700 cursor-pointer" onClick={goToAdminLogin}>
                        <h2 className="font-bold text-xl mb-3">Admin Login</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-cyan-500 text-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-cyan-700 cursor-pointer" onClick={goToAdminRegister}>
                        <h2 className="font-bold text-xl mb-3">Admin Register</h2>
                    </div>

                    {/* Student Section */}
                    <div className="flex flex-col items-center justify-center bg-yellow-300 text-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer" onClick={goToStudentLogin}>
                        <h2 className="font-bold text-xl mb-3">Student Login</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-yellow-300 text-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 cursor-pointer" onClick={goToStudentRegister}>
                        <h2 className="font-bold text-xl mb-3">Student Register</h2>
                    </div>
                </div>
            </div>

            {/* Wi-Fi Icon (right side on large screens) */}
            <div className="hidden sm:flex flex-col items-center justify-center sm:w-1/2 text-white space-y-4 sm:mr-20 ">
                <div className="relative flex justify-center items-center p-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-110 transform transition-all duration-300">
                    <FaWifi className="text-9xl" />
                    <span className="absolute top-0 left-0 right-0 bottom-0 animate-ping opacity-75 rounded-full bg-cyan-300"></span>
                </div>
                <p className="text-lg">Interact with Wi-Fi symbol</p>
            </div>
        </div>

        {/* About Us, Services, Contact Sections */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-400 flex flex-col p-10 text-center gap-10">
            {/* About Us Section */}
            <div className="bg-white text-black border-2 rounded-2xl flex flex-col gap-10 p-8 shadow-lg">
                <div className="flex items-center justify-start gap-4 mb-6">
                    <FaUsers className="text-4xl text-cyan-500" />
                    <h1 className="text-5xl font-bold text-left">About Us</h1>
                </div>
                <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. We are dedicated to providing the best services for students and admins alike.</p>
            </div>

            {/* Services Section */}
            <div className="bg-white text-black border-2 rounded-2xl flex flex-col gap-10 p-8 shadow-lg">
                <div className="flex items-center justify-start gap-4 mb-6">
                    <FaTools className="text-4xl text-yellow-500" />
                    <h1 className="text-5xl font-bold text-left">Services</h1>
                </div>
                <p className="text-lg">We offer a wide range of services to help students and admins manage their activities, stay connected, and improve their learning experience.</p>
            </div>

            {/* Contact Section */}
            <div className="bg-white text-black border-2 rounded-2xl flex flex-col gap-10 p-8 shadow-lg">
                <div className="flex items-center justify-start gap-4 mb-6">
                    <FaPhoneAlt className="text-4xl text-green-500" />
                    <h1 className="text-5xl font-bold text-left">Contact</h1>
                </div>
                <p className="text-lg">If you have any questions or need assistance, feel free to contact us. We are here to help!</p>
            </div>
        </div>
        </>
    );
}

export default Home;
