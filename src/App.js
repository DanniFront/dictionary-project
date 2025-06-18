import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="ocean" />
      </main>
      <footer className="App-footer">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/danielamure/">Daniela Mure</a> and
        is{" "}
        <a href="https://github.com/DanniFront/dictionary-project.git">
          open-sourced on GitHub
        </a>{" "}
        💜
      </footer>
    </div>
  );
}
