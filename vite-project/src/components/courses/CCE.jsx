import Nav from '../Navbar';

const CCE =()=>{
    return(
         <>
     <Nav isLogin={localStorage.getItem("isLogin") === "true"} onLogout={() => {
         localStorage.setItem("isLogin", "false");
         window.location.href = "/";
     }} />
     <div className="bg-blue-200 p-4 shadow-md text-brown font-bold text-xl  h-screen text-center">
      <div className="bg-white p-10 rounded-lg shadow-md  m-10">
        <section >
            <h1 className="text-2xl text-blue-300">CCE</h1>
            <p>Computer and Communication Engineering (CCE) is a field that integrates computer science and communication technologies to design, develop, and manage systems that facilitate data transmission and processing. It encompasses areas such as network design, wireless communication, embedded systems, and software development.</p>
            <p>CCE professionals work on creating efficient communication networks, developing software applications, and ensuring the security and reliability of data transmission. They are involved in various industries, including telecommunications, information technology, and electronics.</p>       
            <p>With the increasing demand for connectivity and data exchange, CCE plays a crucial role in advancing communication technologies and improving the efficiency of information systems.</p>
            <p>Overall, CCE is a dynamic and interdisciplinary field that combines elements of computer science, electrical engineering, and communication technologies to address the challenges of modern data communication and processing.</p>  

        </section>
          </div>
          </div>
    </>

  
    )
}

export default CCE;