import Header from "./components/header/Header";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/footer/Footer";

import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Cta />
        <Features />
        <Articles />
        <Footer />
      </main>
    </>
  );
};

export default App;
