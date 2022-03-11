import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Services/Services";
import Service from "./Services/Service";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="content"></div>
      </div>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
