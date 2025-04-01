import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam"; 

function StudentLogin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [showCamera, setShowCamera] = useState(false); // State for showing/hiding camera
    const [imageSrc, setImageSrc] = useState(null); // State to store captured image
    const navigate = useNavigate();
    const [isImage, setIsImage]= useState(false);

    // Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        if (user === "admin" && password === "admin") {
            navigate("/admin/dashboard");
        } else {
            alert("Invalid Credentials");
        }
    };

    // Capture the photo from the webcam
    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        setShowCamera(false); 
        setIsImage(true);// Close camera after capture
    };

    // Close camera modal
    const closeCamera = () => {
        setShowCamera(false);
    };

    // Reference to the webcam
    const webcamRef = React.useRef(null);

    return (
        <>
            <div className="flex flex-col sm-m-10 bg-gradient-to-r from-gray-700 to-gray-400 items-center justify-center h-screen sm:max-xl">
                <form onSubmit={handleLogin} className="sm:max-w-full sm:max-h-full flex flex-col justify-around border-4 rounded-2xl p-10 shadow-2xl shadow-black bg-gradient-to-r from-yellow-300 to-yellow-100 min-w-100 min-h-120 hover:scale-115 transition-all duration-600 hover:shadow-white ">
                    <h1 className="text-3xl text-center font-bold mb-5">Student Login</h1>
                    <label>UserName</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        className="border-1 rounded-xl text-center min-h-10"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="border-1 rounded-xl text-center min-h-10"
                    />

                    {/* Face Recognition Button */}
                  {isImage ||  <button
                        type="button"
                        onClick={() => setShowCamera(true)}
                        className="w-full mt-6 rounded-2xl bg-blue-500 text-white p-2 hover:bg-blue-800 hover:shadow-2xl hover:scale-105 transition-all duration-600"
                    >
                        Face Recognition
                    </button>}
                  {isImage && <h1 className="text-center text-3xl text-green-500">Done</h1>}

                    <button type="submit" className="w-full mt-6 rounded-2xl bg-cyan-500 text-white p-2 hover:bg-cyan-800 hover:shadow-2xl hover:scale-105 transition-all duration-600">Login</button>

                    <p className="mt-2 text-sm text-center">
                        Don't have an account? <a href="/admin/register" className="text-blue-500 transition-all duration-100 hover:scale-110 hover:text-blue-800 hover:underline">Register</a>
                    </p>
                </form>

                {/* Camera Modal */}
                {showCamera && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-4 rounded-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-center">Capture Face</h2>
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width="100%"
                                videoConstraints={{
                                    facingMode: "user",
                                }}
                            />
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={capturePhoto}
                                    
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                                >
                                    Capture Frame
                                </button>
                                <button
                                    onClick={closeCamera}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800"
                                >
                                    Close
                                </button>
                            </div>

                            {/* Display Captured Image */}
                            {imageSrc && (
                                <div className="mt-4">
                                    <img src={imageSrc} alt="Captured" className="w-full rounded-md" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default StudentLogin;
