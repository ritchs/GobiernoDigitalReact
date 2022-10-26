import logo from "../pikachu.png";
import "../App.css";
function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="/home" rel="noopener noreferrer">
          Pokédex
        </a>
      </header>
    </div>
  );
}

export default Inicio;
