import Header from "./components/header/Header";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/footer/Footer";

import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // animating the progress bar...
  const progress = document.querySelector(".progress-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  if (progress) {
    window.onscroll = () => {
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };
  }
  return (
    <>
      {/* the scroll progress bar */}

      <div className="progress-bar rounded-full z-100 fixed top-0 right-0 w-[6px] bg-linear-to-t h-full from-Lime-Green to-Bright-Cyan"></div>
      <div className="scroll-path rounded-full z-100 fixed top-0 right-0 w-[6px] h-[10px] bg-Bright-Cyan"></div>

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
