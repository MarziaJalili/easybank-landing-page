import SocialIcons from "./SocialIcons";
import RequestButton from "../RequestButton";
const Footer = () => {
  return (
    <footer className="p-10 bg-Dark-Blue flex flex-col items-center justify-center space-y-8">
      <img src="./light-logo.svg" alt="logo-image" />
      <SocialIcons />

      <ul className="flex flex-col items-center space-y-3 text-Light-Grayish-Blue ">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>

      <RequestButton show={"px-10"} />
      <span className="text-Grayish-Blue text-sm">
        &copy; Easybank. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
