import "./App.css";
import Course from "./Course";
import Header from "./Header"
import Seçim from "./images/2023secim.png";
import Portfolio from "./images/portfolio-website.png";
import qrMenu from "./images/qr-menu.png";
import Todo from "./images/to-do-app.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              image={Seçim}
              title="Seçim"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className="column">
            <Course
              image={Portfolio}
              title="Portfolio Website"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className="column">
            <Course
              image={qrMenu}
              title="QR Menü"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className="column">
            <Course
              image={Todo}
              title="To Do App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
