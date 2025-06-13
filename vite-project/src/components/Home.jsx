import {Link} from 'react-router-dom';
import Nav from './Navbar';
const Home = () => {
    return (
     <>
     <Nav isLogin={localStorage.getItem("isLogin") === "true"} onLogout={() => {
         localStorage.setItem("isLogin", "false");
         window.location.href = "/";
     }} />
  <h1 className="text-2xl text-blue-300 text-center mt-10">Welcome to the Home Page</h1>


     </>
        
    );
};

export default Home;
