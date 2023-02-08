import { useState } from "react";
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";

function App() {
  const [light, setCount] = useState(false);

  return (
    <div className="App">
      <Info />
      <About />
      <Footer />
    </div>
  );
}

export default App;
