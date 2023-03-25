import "./App.css";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Course
        title="React"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Course
        title="HTML"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Course
        title="CSS"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

export default App;
