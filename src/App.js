import { useState } from "react";
import "./App.css";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";
import Placeholder from "./components/Placeholder";

function App() {
  const [chat, setChat] = useState();

  return (
    <div className="app">
      <ContactListComponent setChat={setChat} />
      {chat ? <ConversationComponent chat={chat} /> : <Placeholder />}
    </div>
  );
}

export default App;
