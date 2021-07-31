import "./ConversationComponent.css";
import { messagesList } from "../mockData";

const ConversationComponent = (props) => {
  const { chat } = props;
  return (
    <div className="conversation">
      <div className="profileHeader">
        {" "}
        <img
          className="profileImage"
          src="https://avatars.githubusercontent.com/u/20269286?v=4"
          // src={chat.profilePic}
          alt="Profile Pic"
        />
        {chat.name}
      </div>
      {/* "ConversationComponent" */}
      <div className="messageContainer">
        {/* <div className={props.isYours ? "messageDiv1" : "messageDiv2"}>
          <div className={props.isYours ? "message1" : "message2"}>Hiiiii</div>
        </div> */}
        {messagesList.map((messageData) => (
          <div
            className={
              messageData?.senderID === 0 ? "messageDiv1" : "messageDiv2"
            }
          >
            <div
              className={messageData?.senderID === 0 ? "message1" : "message2"}
            >
              {messageData?.text}
            </div>
          </div>
        ))}

        {/* <div className={"messageDiv1"}>
          <div className="message1">Hiiiii</div>
        </div>
        <div className={"messageDiv2"}>
          <div className="message2">Hiiiii</div>
        </div> */}
      </div>

      <div className="chatBox">
        <div className="searchContainer">
          <img
            src="https://raw.githubusercontent.com/ayushkul/whatsapp-clone/facc8f2de4ca92aa9b6db5a931491d8d5be3be84/client/public/data.svg"
            alt="Chat Icon"
            className="emojiImage"
          />
          <input
            className="searchInput"
            placeholder="Type a message..."
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ConversationComponent;
