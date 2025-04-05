import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const featureData = [
  {
    id: "one",
    img: "./icon-online.svg",
    heading: "Online Banking",
    paragraph:
      "Our modern web and applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: "two",
    img: "./icon-budgeting.svg",
    heading: "Simple Budgeting",
    paragraph:
      "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
  },
  {
    id: "three",
    img: "./icon-onboarding.svg",
    heading: "Fast Onboarding",
    paragraph:
      "We don't branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: "four",
    img: "./icon-api.svg",
    heading: "Open API",
    paragraph:
      "Manage your savings, investments, pension, and much from one account. Tracking your money has never been easier.",
  },
];

const Features = () => {
  // animations, bro!
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".one", {
      scrollTrigger: ".one",
      y: 0,
      duration: 2,
      ease: "elastic",
    });

    gsap.to(".two", {
      scrollTrigger: ".two",
      y: 0,
      delay: 0.2,
      duration: 2,
      ease: "elastic",
    });

    gsap.to(".three", {
      scrollTrigger: ".three",
      y: 0,
      delay: 0.4,
      duration: 2,
      ease: "elastic",
    });

    gsap.to(".four", {
      scrollTrigger: ".four",
      y: 0,
      delay: 0.6,
      duration: 2,
      ease: "elastic",
    });

    gsap.to(".-translate-x-full", {
      scrollTrigger: ".-translate-x-full",
      x: 0,
      duration: 1,
      ease: "in",
    });
  });

  // generate features...
  const features = featureData.map((item, index) => (
    <li
      key={item.heading}
      className={`translate-y-full flex flex-col space-y-6 items-center lg:items-start md:max-w-sm lg:w-[270px] shrink-0 ${item.id}`}
    >
      <img src={item.img} alt="feature image" aria-hidden="true" />
      <h3 className="text-Dark-Blue text-2xl font-light xl:text-3xl">
        {item.heading}
      </h3>
      <p className="text-Grayish-Blue max-sm:w-auto max-md:w-3/4 xl:text-lg">
        {item.paragraph}
      </p>
    </li>
  ));

  return (
    <section className="features bg-Light-Grayish-Blue flex flex-col  text-center items-center space-y-6 px-6 py-20 mt-20 lg:items-start lg:text-left lg:px-30 lg:py-30 md:mt-0 ">
      <div className="flex flex-col space-y-6 md:max-w-xl">
        <h2 className="text-Dark-Blue text-3xl font-light md:text-4xl -translate-x-full">
          Why choose Easybank?
        </h2>
        <p className="text-Grayish-Blue mb-10 md:text-lg -translate-x-full">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <ul className="flex  w-full flex-col space-y-15 lg:flex-row items-center xl:space-y-0  lg:justify-between lg:items-start lg:space-x-6 lg:overflow-auto">
        {features}
      </ul>
    </section>
  );
};

export default Features;
