import "./ContactComponent.css";

const ContactComponent = () => {
  return (
    <div className="contactItem">
      <img
        className="profileIcon"
        src="https://avatars.githubusercontent.com/u/20269286?v=4"
        alt="Profile Icon"
      />
      <div className="contactInfo">
        <span className="contactName">Abhi Ram</span>
        <span className="messageText">Satpute</span>
      </div>
      <span className="messageTime">1:00pm</span>
    </div>
  );
};

export default ContactComponent;
