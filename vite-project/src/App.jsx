// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home' 
import CSE from './components/courses/CSE'
import CCE from './components/courses/CCE'
import AIML from './components/courses/AIML'

import './App.css'

function App() {
  return (
    <div>
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/CSE" element={<CSE/>} />
        <Route path="/CCE" element={<CCE/>} />
        <Route path="/AIML" element={<AIML/>} />
       
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
