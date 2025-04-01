import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
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
    <header className="relative z-1 py-5 px-6 flex items-center justify-between bg-white drop-shadow-xs lg:px-20 xl:px-40">
      {/* logo image */}
      <img className="max-md:w-[120px]" src="./logo.svg" alt="logo image" />
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
      <a>
        <button
          href="#"
          className="dark-btn pt-2 pb-3 cursor-pointer px-6 font-bold text-white bg-gradient-to-r  from-Lime-Green to-Bright-Cyan bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light duration-300 hidden text-bold hover:opacity-70 transition-opacity md:block"
        >
          Request Invite
        </button>
      </a>
    </header>
  );
};

export default Header;
