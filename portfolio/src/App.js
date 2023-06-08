import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
