import Header from "./components/header/Header";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/footer/Footer";

import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* the scroll progress bar */}
      <div className="progressbar z-100 fixed top-0 right-0 w-[10px] h-[100%] bg-linear-to-t from-Lime-Green to-Bright-Cyan"></div>
      <div className="scroll-path z-100 fixed top-0 right-0 w-[10px] h-[10px] bg-Bright-Cyan"></div>

      {/* main content of the page */}
      <Header darkMode={darkMode} />
      <main>
        <Cta darkMode={darkMode} setDarkMode={setDarkMode} />
        <Features />
        <Articles />
        <Footer />
      </main>
    </>
  );
};

export default App;
