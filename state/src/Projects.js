import Seçim from "./images/2023secim.png";
import Portfolio from "./images/portfolio-website.png";
import qrMenu from "./images/qr-menu.png";
import Todo from "./images/to-do-app.png";
import './Projects.css'

const projectMap = {Seçim:Seçim, Portfolio:Portfolio, qrMenu:qrMenu, Todo:Todo}
const projectUrl = {
  Seçim: 'https://samettyldrm.github.io/front-end-projects/geriSayim/index.html',
  Portfolio: 'https://samettyldrm.github.io/index.html',
  qrMenu: 'https://samettyldrm.github.io/front-end-projects/qrMenu/index.html',
  Todo: 'https://samettyldrm.github.io/front-end-projects/toDoList/index.html',
}

function Projects({ projectName }) {
  console.log(projectName);
  return (
    <div  className="ProjectList">
      <div>
        <img src={projectMap[projectName]} alt="" />
        <br />
        <a href={projectUrl[projectName]}>{projectName}</a>
      </div>
    </div>
  );
}

export default Projects;
