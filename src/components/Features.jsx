const featureData = [
  {
    img: "./icon-online.svg",
    heading: "Online Banking",
    paragraph:
      "Our modern web and applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: "./icon-budgeting.svg",
    heading: "Simple Budgeting",
    paragraph:
      "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
  },
  {
    img: "./icon-onboarding.svg",
    heading: "Fast Onboarding",
    paragraph:
      "We don't branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: "./icon-api.svg",
    heading: "Open API",
    paragraph:
      "Manage your savings, investments, pension, and much from one account. Tracking your money has never been easier.",
  },
];

const Features = () => {
  // generate features...
  const features = featureData.map((item) => (
    <li
      key={item.heading}
      className="flex flex-col space-y-6 items-center md:items-start md:w-[275px] shrink-0"
    >
      <img src={item.img} alt="feature image" />
      <h3 className="text-Dark-Blue text-2xl font-light xl:text-3xl">
        {item.heading}
      </h3>
      <p className="text-Grayish-Blue max-md:w-3/4 xl:text-lg">
        {item.paragraph}
      </p>
    </li>
  ));

  return (
    <section className="features bg-Light-Grayish-Blue flex flex-col  text-center items-center space-y-6 px-6 py-15 mt-20 md:items-start md:text-left md:px-40 ">
      <div className="flex flex-col space-y-6 md:max-w-xl">
        <h2 className="text-Dark-Blue text-3xl font-light md:text-4xl">
          Why choose Easybank?
        </h2>
        <p className="text-Grayish-Blue mb-10 md:text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <ul className="flex  w-full flex-col space-y-15 md:flex-row  md:items-center xl:space-y-0 flex-wrap  md:justify-between">
        {features}
      </ul>
    </section>
  );
};

export default Features;
