import "./Placeholder.css";

const Placeholder = () => {
  return (
    <div className="placeholder">
      <img
        className="chatPlaceholder"
        src="https://github.com/ayushkul/whatsapp-clone/blob/main/client/public/welcome-placeholder.jpeg?raw=true"
        alt="Welcome "
      />
      <span>Keep your phone connected</span>
      Whatsapp connects to your phone to sync messages
    </div>
  );
};

export default Placeholder;
