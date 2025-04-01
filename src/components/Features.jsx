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
    <li key={item.heading} className="flex flex-col space-y-6 items-center">
      <img src={item.img} alt="feature image" />
      <h3 className="text-Dark-Blue text-2xl font-light">{item.heading}</h3>
      <p className="text-Grayish-Blue">{item.paragraph}</p>
    </li>
  ));

  return (
    <section className="features bg-Light-Grayish-Blue flex flex-col  text-center items-center space-y-6 px-6 py-15 mt-20">
      <h2 className="text-Dark-Blue text-3xl font-light">
        Why choose Easybank?
      </h2>
      <p className="text-Grayish-Blue mb-10">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <ul className="flex flex-col space-y-15">{features}</ul>
    </section>
  );
};

export default Features;
