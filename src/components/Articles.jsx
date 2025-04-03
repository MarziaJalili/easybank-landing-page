import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const articleData = [
  {
    id: "one",
    img: "./image-currency.jpg",
    author: "Claire Robinson",
    heading: "Receive money in any currency with no fees",
    paragraph:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    id: "two",
    img: "./image-restaurant.jpg",
    author: "Wilson Hutton",
    heading: "Treat yourself without worrying about money",
    paragraph:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    id: "three",
    img: "./image-plane.jpg",
    heading: "Talk your Easybank card wherever you go",
    author: "Wilson Hutton",
    paragraph:
      "We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    id: "four",
    img: "./image-confetti.jpg",
    author: "Claire Robinson",
    heading: "Our invite-only Beta accounts are now live!",
    paragraph:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

const Features = () => {
  // animations, bro!
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // the "a" after the class names stands for articles...
    gsap.to(".onea", {
      scrollTrigger: {
        trigger: ".onea",
        toggleActions: "restart none none none",
      },
      x: 0,
      duration: 1,
      ease: "in",
    });

    gsap.to(".twoa", {
      scrollTrigger: {
        trigger: ".twoa",
        toggleActions: "restart none none none",
      },
      x: 0,
      delay: 0.2,
      duration: 1,
      ease: "in",
    });

    gsap.to(".threea", {
      scrollTrigger: {
        trigger: ".threea",
        toggleActions: "restart none none none",
      },
      x: 0,
      delay: 0.4,
      duration: 1,
      ease: "in",
    });

    gsap.to(".foura", {
      scrollTrigger: {
        trigger: ".foura",
        toggleActions: "restart none none none",
      },
      x: 0,
      delay: 0.6,
      duration: 1,
      ease: "in",
    });
  });

  // generate features...
  const articles = articleData.map((item, index) => (
    <li
      key={item.heading}
      className={`-translate-x-full ${item.id}a flex min-h-[517px] flex-col md:w-[290px] shrink-0 shadow-[0_35px_35px_rgba(243,244,246,1)] rounded-md`}
    >
      <img
        className={`rounded-tr-md rounded-tl-md ${
          index === 0 ? "max-h-[194px]" : ""
        } `}
        src={item.img}
        alt="feature image"
      />
      <div className="p-6  pb-12 flex flex-col space-y-4">
        <span className="text-Grayish-Blue text-sm">By {item.author}</span>
        <h3 className="text-Dark-Blue text-xl font-light">{item.heading}</h3>
        <p className="text-Grayish-Blue">{item.paragraph}</p>
      </div>
    </li>
  ));

  return (
    <section className="features flex flex-col  items-center space-y-6 px-6 py-20 lg:items-start md:px-40 ">
      <h2 className="onea -translate-x-full text-Dark-Blue mb-10 text-3xl font-light md:text-4xl ">
        Latest Articles
      </h2>

      <ul className="flex w-full flex-col space-y-15 lg:flex-row items-center xl:space-y-10  lg:justify-between lg:items-start lg:flex-wrap">
        {articles}
      </ul>
    </section>
  );
};

export default Features;
