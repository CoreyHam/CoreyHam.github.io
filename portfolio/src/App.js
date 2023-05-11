import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Corey Hampton
        </p>
      </header>
    </div>
  );
}

export default App;
