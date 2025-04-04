const RequestButton = ({ show }) => {
  return (
    <a
      href="#"
      className={`${show} invite-btn py-3 cursor-pointer px-6 font-bold text-white bg-gradient-to-r  from-Lime-Green to-Bright-Cyan bg-Bright-Red rounded-full baseline hover:bg-Bright-Red-Sup-Light duration-300 text-bold hover:opacity-70 transition-opacity `}
    >
      Request Invite
    </a>
  );
};

export default RequestButton;
