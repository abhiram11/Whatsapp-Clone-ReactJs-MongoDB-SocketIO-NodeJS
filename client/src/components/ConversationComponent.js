import "./ConversationComponent.css";
import Picker from "emoji-picker-react";
import { messagesList } from "../mockData";
import { useState } from "react";

const ConversationComponent = (props) => {
  const { chat } = props;
  const [text, setText] = useState(""); // used 2 places: changes in input text
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);

  const onEmojiClick = (event, emojiObj) => {
    //just add emoji to text
    setText(text + emojiObj.emoji);
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      const messages = [...messageList];
      messages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "11:11 PM",
      });
      setMessageList(messages);
      setText("");
    }
  };

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
        {messageList.map((messageData) => (
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
          {pickerVisible ? (
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ position: "absolute", bottom: "60px" }}
            />
          ) : null}
          <img
            src="https://raw.githubusercontent.com/ayushkul/whatsapp-clone/facc8f2de4ca92aa9b6db5a931491d8d5be3be84/client/public/data.svg"
            alt="Chat Icon"
            className="emojiImage"
            onClick={() => togglePicker(!pickerVisible)}
          />
          <input
            className="searchInput"
            placeholder="Type a message..."
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ConversationComponent;
