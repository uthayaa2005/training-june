import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnf_password, setCnfPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== cnf_password) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4537/signup", {
        fname,
        lname,
        uname,
        email,
        password,
      });

      const { message, isSignup } = res.data;
      if (isSignup) {
        alert(message);
        navigate("/login");
      } else {
        alert("Signup failed: " + message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <form onSubmit={handleSignup}>
          <label className="text-2xl font-bold text-blue-500">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />

          <label className="text-2xl font-bold text-blue-500">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />

          <label className="text-2xl font-bold text-blue-500">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            required
          />

          <label className="text-2xl font-bold text-blue-500">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <label className="text-2xl font-bold text-blue-500">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
            placeholder="Confirm your password"
            value={cnf_password}
            onChange={(e) => setCnfPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-200 text-black font-bold p-2 rounded w-full"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
