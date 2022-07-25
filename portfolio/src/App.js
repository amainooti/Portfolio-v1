import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <div className="App">
          <Navbar />
          <Route exact path="/" element= {<Hero />} />
          <Route path="/about" element= {<About />} />
        </div>
        </Routes>
</>
  );
}

export default App;
