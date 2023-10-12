import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
