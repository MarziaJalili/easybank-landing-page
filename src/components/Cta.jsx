import RequestButton from "./RequestButton";
import ToggleButton from "./ToggleButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cta = ({ darkMode, setDarkMode }) => {
  useGSAP(() => {
    gsap.to(".-translate-y-full", {
      y: 0,
      duration: 2,
      ease: "back",
    });
  });

  return (
    <section className="cta overflow-hidden flex flex-col items-center lg:flex-row-reverse  md:space-x-6">
      <div
        className={`image-bg bg-[url(../public/bg-intro-mobile.svg)] bg-no-repeat -mr-10  bg-[length:100%] lg:bg-[length:130%] lg:bg-[url(../public/bg-intro-desktop.svg)] lg:bg-[position:top_150%_right_85%]`}
      >
        <img
          className="-mt-40 drop-shadow-2xl pb-10 md:pl-40 md:-mt-20"
          src="./image-mockups.png"
          alt="mockups-image"
        />
      </div>

      <div className="flex relative flex-col justify-center items-center space-y-5 text-center p-6 lg:w-1/2 lg:pl-20 xl:pl-30 lg:text-left max-lg:max-w-[600px] lg:items-start">
        <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        <h1 className="text-Dark-Blue  font-light text-4xl md:text-5xl md:leading-15 xl:leading-20  xl:text-6xl -translate-y-full">
          Next generation digital banking
        </h1>
        <p className="text-Grayish-Blue mb-8 xl:text-lg -translate-y-full">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestButton
          show={`-translate-y-full ${
            darkMode
              ? "hover:brightness-120 hover:opacity-100 hover:shadow-[0_0_30px_hsla(136,65%,51%,1)]"
              : ""
          }`}
        />
      </div>
    </section>
  );
};

export default Cta;
