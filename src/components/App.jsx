import { useState } from "react";
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";
import Switch from "./Switch";
import Interests from "./Interests";

function App() {
  const [isDark, setIsDark] = useState(true);

  const changeColor = () => {
    const root = document.querySelector(":root");
    root.style.colorScheme = isDark === true ? "light" : "dark";
    setIsDark(!isDark);
  };

  return (
    <div className="container">
      {/* <Switch isDark={isDark} changeColor={changeColor} /> */}
      <div className="main">
        <div className="header">
          <Info />
        </div>
        <main className="main-content">
          <About />
          <Interests />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
