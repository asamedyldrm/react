import Projects from "./Projects";
import "./App.css";
import { useState } from "react";

function getRandomProject() {
  const projectArray = ["Seçim", "Portfolio", "qrMenu", "Todo"];
  return projectArray[Math.floor(Math.random() * projectArray.length)];
}

function App() {
  const [projects, setProjects] = useState([]);

  const handleClick = () => {
    setProjects([...projects, getRandomProject()])
  };

  const projectList = projects.map((project, index)=>{
    return <Projects key={index} projectName= {project}/>
   }); 

  return (
    <div className="App">
      <button className="App-btn" onClick={handleClick}>Proje Ekle</button>
      <div className="ProjectContainer">{projectList}</div>
    </div>
  );
}

export default App;
