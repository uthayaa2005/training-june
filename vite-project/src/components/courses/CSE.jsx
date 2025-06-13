import Nav from "../Navbar";   

const CSE = () =>{
  return(  
    <>
     <Nav isLogin={localStorage.getItem("isLogin") === "true"} onLogout={() => {
         localStorage.setItem("isLogin", "false");
         window.location.href = "/";
     }} />
    <div className="bg-blue-200 p-4 shadow-md text-brown font-bold text-xl  h-screen text-center">
      <div className="bg-white p-10 rounded-lg shadow-md  m-10">
  <section >

        <h1 className="text-2xl text-violet-900 ">Computer Science and Engineering</h1>
        <p className="">Computer Science and Engineering (CSE) is a field that combines principles of computer science and electrical engineering to develop computer systems and software. It encompasses a wide range of topics including algorithms, data structures, software design, computer architecture, and artificial intelligence.</p>    
        <p>CSE graduates are equipped with the skills to design, develop, and maintain software systems, as well as to understand the underlying hardware that runs these systems. They often work in areas such as software development, systems analysis, network administration, and cybersecurity.</p>
        <p>In addition to technical skills, CSE programs often emphasize problem-solving, critical thinking, and teamwork, preparing students for a variety of roles in the tech industry.</p>
        <p>Overall, CSE is a dynamic and rapidly evolving field that plays a crucial role in shaping the future of technology and innovation.</p>

    </section>
    </div>
    </div>
    
    </>
  )
}

export default CSE;