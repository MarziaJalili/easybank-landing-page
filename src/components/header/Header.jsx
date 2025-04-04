import RequestButton from "../RequestButton";
import Nav from "./Nav";
import { useState } from "react";

const Header = ({ darkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  // toggle the menu button
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    // toggle and animate the nav

    if (isMenuShown) {
      document.querySelector("#menu").classList.add("fade-nav");
      document.body.classList.remove("overlay");
      setTimeout(() => {
        setIsMenuShown(false);
        btn.classList.remove("open");
      }, 1000);
    } else {
      setIsMenuShown(true);
      btn.classList.add("open");
      document.body.classList.add("overlay");
    }
  };
  console.log(document.body);
  return (
    <header className="fixed w-full z-1 md:py-4 p-6 flex items-center justify-between bg-white drop-shadow-xs max-lg:pr-8 lg:px-20 xl:px-40">
      {/* logo image */}
      <img
        className="max-md:w-[120px]"
        src={darkMode ? "./light-logo.svg" : "./logo.svg"}
        alt="logo image"
      />
      <Nav isMenuShown={isMenuShown} />

      {/* Hamburger Icon */}
      <button
        aria-label="Toggles the Navigation Menu"
        id="menu-btn"
        className="hamburger absolute right-6 transition-all w-[24px] h-[24px] cursor-pointer md:hidden focus:outline-none"
        onClick={handleClick}
      >
        <span className="bg-Grayish-Blue hamburger-top absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
        <span className="bg-Grayish-Blue hamburger-middle translate-y-[7px] absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
        <span className="bg-Grayish-Blue hamburger-bottom  absolute top-0 left-0 w-[24px] h-[2px]   bg-Very-Dark-Blue"></span>
      </button>

      {/* Request Invite button */}
      <RequestButton
        show={`hidden md:block ${
          darkMode
            ? "hover:brightness-120 hover:opacity-100 hover:shadow-[0_0_30px_hsla(136,65%,51%,1)]"
            : ""
        }`}
      />
    </header>
  );
};

export default Header;
