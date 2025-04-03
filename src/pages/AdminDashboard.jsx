import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  const [studentsPresent, setStudentsPresent] = useState(0);
  const [studentsAbsent, setStudentsAbsent] = useState(0);

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-cyan-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Students Present</h2>
            <p className="text-4xl font-bold">{studentsPresent}</p>
          </div>
          <div className="bg-yellow-300 p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-semibold">Students Absent</h2>
            <p className="text-4xl font-bold">{studentsAbsent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
