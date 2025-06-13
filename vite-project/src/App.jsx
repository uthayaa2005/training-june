import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home' 
import CSE from './components/courses/CSE'
import CCE from './components/courses/CCE'
import AIML from './components/courses/AIML'
import Nav from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'  // ✅ Import it

import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  useEffect(() => {
    const handleStorage = () => setIsLogin(localStorage.getItem("isLogin") === "true");
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/CSE" element={<ProtectedRoute><CSE /></ProtectedRoute>} />
        <Route path="/CCE" element={<ProtectedRoute><CCE /></ProtectedRoute>} />
        <Route path="/AIML" element={<ProtectedRoute><AIML /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
