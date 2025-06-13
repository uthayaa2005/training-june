import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4537/login", {
        username,
        password,
      });

      const { message, isLogin } = res.data;

      if (isLogin) {
        localStorage.setItem("isLogin", "true");
        alert(message);
        navigate("/home");
      } else {
        localStorage.setItem("isLogin", "false");
        alert(message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin}>
          <label className="text-2xl font-bold text-blue-500">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="text-2xl font-bold text-blue-500">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-200 text-black font-bold p-2 rounded w-full"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-bold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
