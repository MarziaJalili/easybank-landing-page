import MobileNav from "./MobileNav";
const Nav = ({ isMenuShown }) => {
  return (
    <nav>
      {/* menu items */}
      <ul className="hidden md:flex text-Grayish-Blue font-light space-x-6">
        <li>
          <a href="#" className="hover:text-Dark-Blue transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-Dark-Blue transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-Dark-Blue transition-colors">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-Dark-Blue transition-colors">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-Dark-Blue transition-colors">
            Careers
          </a>
        </li>
      </ul>

      {/* toggle button */}
      {/* <ToggleButton darkMood={darkMood} setDarkMood={setDarkMood} /> */}

      {isMenuShown ? <MobileNav /> : null}
    </nav>
  );
};

export default Nav;
