import RequestButton from "./RequestButton";

const Cta = () => {
  return (
    <section className="cta relative overflow-hidden flex flex-col items-center lg:flex-row-reverse  md:space-x-6">
      <div className="bg-[url(./bg-intro-mobile.svg)] bg-no-repeat -mr-10  bg-[length:100%] lg:bg-[length:130%] lg:bg-[url(./bg-intro-desktop.svg)] lg:bg-[position:top_150%_right_85%]">
        <img
          className="-mt-40 drop-shadow-2xl pb-10 md:pl-40 md:-mt-20"
          src="./image-mockups.png"
          alt="mockups-image"
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-5 text-center p-6 lg:w-1/2 lg:pl-20 xl:pl-30 lg:text-left max-lg:max-w-[600px] lg:items-start">
        <h1 className="text-Dark-Blue font-light text-4xl md:text-5xl md:leading-15 xl:leading-20  xl:text-6xl ">
          Next generation digital banking
        </h1>
        <p className="text-Grayish-Blue mb-8 xl:text-lg">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestButton show={""} />
      </div>
    </section>
  );
};

export default Cta;
