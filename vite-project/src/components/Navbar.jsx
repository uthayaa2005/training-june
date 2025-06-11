import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
const Nav =() => {
 var [dropdown, showdropdown] = useState(false);
 var [dept,showdept] = useState("");
 useEffect(() => {
     console.log("Welcome to", dept);
     }, [dept]);
 
      return (
        <div  className=" bg-gray-200 p-4  shadow-md text-blue-300 font-bold text-2xl  rounded-lg text-center ">
        <div className="flex flex-row gap-4 justify-center ">

            <div  className='dropdown'
            onMouseEnter={() =>showdropdown((dropdown) => !dropdown)}
                 onMouseLeave={() => showdropdown((dropdown) => !dropdown)}>
            <span className="link">Courses</span>
            {dropdown && (<ul className=" dropdown-list absolute bg-white shadow-md rounded-lg p-2">
                <li className=" dropdown-link p-2 hover:bg-gray-100">
                <Link to="/CSE" onClick={() => showdept("CSE")}>CSE</Link></li>
                <li className=" dropdown-link p-2 hover:bg-gray-100"><Link to="/CCE" onClick={() => showdept("CCE")}>CCE</Link></li>
                <li className=" dropdown-link p-2 hover:bg-gray-100"><Link to="/AIML" onClick={() => showdept("AIML")}>AIML</Link></li>
                </ul>)}
                 </div>
        
          <a href="/about">About</a>
            <a href="/home">Home</a>
            <a href="/">Login</a>
            
            </div>
       </div>

      )}


export default Nav;