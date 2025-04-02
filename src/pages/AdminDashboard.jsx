import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    // Mock state for rooms
    const [rooms, setRooms] = useState([
        { room_code: "ROOM123", created_at: "2025-04-02 10:00" },
        { room_code: "ROOM456", created_at: "2025-04-02 11:00" },
    ]);

    // Mock state for students
    const [students, setStudents] = useState([
        { student_id: "S001", username: "JohnDoe", status: "Online", active_time: "10 mins", room: "ROOM123" },
        { student_id: "S002", username: "JaneDoe", status: "Online", active_time: "15 mins", room: "ROOM123" },
    ]);

    const [roomCode, setRoomCode] = useState("");

    // Function to create a new room
    const createRoom = () => {
        if (!roomCode) {
            alert("Please enter a room code");
            return;
        }
        setRooms([...rooms, { room_code: roomCode, created_at: new Date().toISOString().slice(0, 16) }]);
        setRoomCode(""); // Clear input
    };

    // Function to close a room
    const closeRoom = (code) => {
        if (window.confirm(`Are you sure you want to close ${code}?`)) {
            setRooms(rooms.filter(room => room.room_code !== code));
        }
    };

    // Simulate live student list updates every second
    useEffect(() => {
        const interval = setInterval(() => {
            setStudents([...students]); // Mock update
        }, 1000);

        return () => clearInterval(interval);
    }, [students]);

    // Logout function
    const logout = () => {
        alert("Logging out...");
        navigate("/"); // Redirect to home
    };

    return (
        <div className="flex h-screen bg-gradient-to-r from-gray-700 to-gray-400 text-white">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-r from-yellow-300 to-yellow-100 shadow-lg p-6 fixed h-full">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Panel</h2>
                <ul className="space-y-4">
                    <li className="hover:scale-110 transition-all duration-300">
                        <a href="#" className="block text-lg font-semibold text-gray-800 hover:text-gray-600">Dashboard</a>
                    </li>
                    <li className="hover:scale-110 transition-all duration-300">
                        <a href="#" className="block text-lg font-semibold text-gray-800 hover:text-gray-600">Room Management</a>
                    </li>
                    <li className="hover:scale-110 transition-all duration-300">
                        <a href="#" className="block text-lg font-semibold text-gray-800 hover:text-gray-600">Students</a>
                    </li>
                </ul>
                <button
                    onClick={logout}
                    className="mt-10 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:scale-105 transition-all duration-300"
                >
                    LOGOUT
                </button>
            </div>

            {/* Main Content */}
            <div className="ml-64 flex-1 p-10">
                <h1 className="text-3xl font-bold mb-5 text-blue-300">Admin Dashboard</h1>

                {/* Room Management */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-black">
                    <h2 className="text-2xl font-semibold mb-4">Room Management</h2>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            placeholder="Enter room code"
                            className="p-2 border rounded w-full"
                        />
                        <button onClick={createRoom} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Create Room
                        </button>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">Active Rooms</h3>
                    <ul>
                        {rooms.map((room, index) => (
                            <li key={index} className="flex justify-between p-2 bg-gray-200 rounded mb-2">
                                {room.room_code} (Created: {room.created_at})
                                <button onClick={() => closeRoom(room.room_code)} className="text-red-500 hover:underline">
                                    Close Room
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download Attendance */}
                <a href="/download_attendance">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-6">
                        Download Attendance
                    </button>
                </a>

                {/* Student List */}
                <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Currently Connected Students</h2>
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-md text-black">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Student ID</th>
                            <th className="border border-gray-400 px-4 py-2">Username</th>
                            <th className="border border-gray-400 px-4 py-2">Status</th>
                            <th className="border border-gray-400 px-4 py-2">Active Time</th>
                            <th className="border border-gray-400 px-4 py-2">Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="border border-gray-400 px-4 py-2">{student.student_id}</td>
                                <td className="border border-gray-400 px-4 py-2">{student.username}</td>
                                <td className="border border-gray-400 px-4 py-2">{student.status}</td>
                                <td className="border border-gray-400 px-4 py-2">{student.active_time}</td>
                                <td className="border border-gray-400 px-4 py-2">{student.room}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
