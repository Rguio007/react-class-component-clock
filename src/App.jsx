import "./App.css";
import Clock from "./Clock.jsx";
import OnSubmit from "./onSubmit";
import OnlyNumbers from "./OnlyNumbers";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Clock />
          <OnSubmit />
          <OnlyNumbers />
        </header>
      </div>
    </>
  );
}

export default App;
