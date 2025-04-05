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
      <div className="progress-bar rounded-full z-100 fixed top-0 right-0 w-[6px] bg-linear-to-t from-Lime-Green to-Bright-Cyan"></div>
      <div className="scroll-path rounded-full z-100 fixed top-0 right-0 w-[6px] h-[10px] bg-Bright-Cyan"></div>
      {/* main content of the page */}
      <Header darkMode={darkMode} />

      {/* to top button */}
      <a
        href="#"
        className="fixed z-100 py-2 top-[50%] cursor-pointer px-1 pr-3 hover:px-4 font-extrabold text-white bg-gradient-to-r  from-Lime-Green to-Bright-Cyan bg-Bright-Red rounded-tr-full rounded-br-full duration-300 text-bold hover:brightness-120 hover:opacity-100 hover:shadow-[0_0_30px_hsla(136,65%,51%,1)]"
      >
        ↑
      </a>
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
