import "./ContactComponent.css";

const ContactComponent = (props) => {
  const { userData, setChat } = props;
  return (
    <div className="contactItem" onClick={() => setChat(userData)}>
      <img
        className="profileIcon"
        // src={userData?.profilePic}
        src={"https://avatars.githubusercontent.com/u/20269286?v=4"}
        alt="Profile Icon"
      />
      <div className="contactInfo">
        <span className="contactName">{userData?.name}</span>
        <span className="messageText">{userData?.lastText}</span>
      </div>
      <span className="messageTime">{userData?.lastTextTime}</span>
    </div>
  );
};

export default ContactComponent;
