import { use, useState } from "react";
import { useNavigate } from "react-router-dom";






function AdminLogin() {
    const [user , setUser] =useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        if(user === "admin" && password === "admin"){
            navigate("/admin/dashboard");
        }else{
            alert("Invalid Credentials");
        }
    }


    return (
    <>
      <div className="flex flex-col sm-m-10 bg-gradient-to-r from-gray-700 to-gray-400 items-center justify-center h-screen sm:max-xl">
        <form onSubmit={handleLogin} className="sm:max-w-full  sm:max-h-full flex flex-col justify-around border-4 rounded-2xl p-10 shadow-2xl shadow-black bg-gradient-to-r from-cyan-400  to-cyan-100 min-w-100 min-h-120 hover:scale-115 transition-all duration-600 hover:shadow-cyan-400 " >
            <h1 className="text-3xl text-center font-bold mb-5">Admin Login</h1>
            <label>UserName</label>
            <input
            type="text"
            placeholder="Enter Username"
            onChange={(e)=>setUser(e.target.value)}
            value={user}
            className="border-1 rounded-xl text-center min-h-10">

            </input>
            <label>Password</label>
            <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="border-1 rounded-xl text-center min-h-10">

            </input>
            <button type="submit" className="w-full mt-10 rounded-2xl border-1 bg-blue-500 text-white p-2 hover:bg-blue-800 hover:shadow-2xl hover:scale-105 transition-all duration-600">Login</button>
            <p className="mt-2 text-sm text-center">
          Don't have an account? <a href="/admin/register" className="text-blue-500 hover:text-blue-800 hover:underline">Register</a>
        </p>
        </form>
      </div>
    </>
    );
  }
  
  export default AdminLogin;
  