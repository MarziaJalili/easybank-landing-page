import SocialIcons from "./SocialIcons";
import RequestButton from "../RequestButton";

const Footer = () => {
  return (
    <footer className="p-10 bg-Dark-Blue flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:px-10 lg:px-40">
      <div className="box flex flex-col items-center space-y-8 ">
        <img src="./light-logo.svg" alt="logo-image" />
        <SocialIcons />
      </div>

      <ul className="flex flex-col items-center space-y-3 text-Light-Grayish-Blue md:space-y-0 md:flex-row md:space-x-12">
        <li>
          <ul className="flex flex-col items-center space-y-3 md:items-start">
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col items-center space-y-3 md:items-start">
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                Support
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-Lime-Green"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex flex-col items-center space-y-8 md:items-end">
        <RequestButton
          show={
            "px-10 hover:brightness-120 hover:opacity-100 hover:shadow-[0_0_30px_hsla(136,65%,51%,1)]"
          }
        />
        <span className="text-Grayish-Blue text-sm">
          &copy; Easybank. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
