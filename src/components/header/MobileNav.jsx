const MobileNav = () => {
  return (
    <div
      id="menu"
      className="absolute text-Dark-Blue flex flex-col items-center self-end py-8 mt-14 space-y-6 font-medium text-lg rounded-lg bg-white sm:w-auto sm:self-center left-6 right-6 lg:hidden drop-shadow-2xl"
    >
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
      <a href="#">Careers</a>
    </div>
  );
};

export default MobileNav;
