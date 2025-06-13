import Nav from '../Navbar';
const AIML = () => {
    return(
         <>
     <Nav isLogin={localStorage.getItem("isLogin") === "true"} onLogout={() => {
         localStorage.setItem("isLogin", "false");
         window.location.href = "/";
     }} />
     <div className="bg-blue-200 p-4 shadow-md text-brown font-bold text-xl  h-screen text-center">
      <div className="bg-white p-10 rounded-lg shadow-md  m-10">
        <section>
            <h1>AIML</h1>
            <p>Artificial Intelligence and Machine Learning (AIML) is a rapidly evolving field that focuses on creating systems capable of performing tasks that typically require human intelligence. This includes learning from data, recognizing patterns, making decisions, and improving over time without explicit programming.</p>
            <p>AIML combines techniques from computer science, statistics, and cognitive science to develop algorithms that can analyze large datasets, identify trends, and make predictions. It encompasses various subfields such as natural language processing, computer vision, and robotics.</p>     
            <p>Professionals in AIML work on developing intelligent systems that can automate processes, enhance user experiences, and solve complex problems across various industries, including healthcare, finance, and technology.</p>
            <p>Overall, AIML is a transformative field that is reshaping how we interact with technology and enabling advancements in automation, data analysis, and decision-making.</p>

        </section>
        </div>
        </div>
    </>
    )
}


export default AIML;