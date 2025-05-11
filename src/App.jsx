// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Carusel from "./pages/Carusel";
import Foter from "./pages/Foter";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Shop from "./pages/Shop";
import Type from "./pages/Type";
function App() {
  return (
    <>
      <a href="#header">
        {" "}
        <button class="Btn">
          <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p class="text">Back to Top</p>
        </button>
      </a>

      <div className="Header_bacground">
        <Nav />
        <Header />
      </div>
      <Type />
      <Shop />
      <Carusel />
      <Foter />
    </>
  );
}

export default App;
