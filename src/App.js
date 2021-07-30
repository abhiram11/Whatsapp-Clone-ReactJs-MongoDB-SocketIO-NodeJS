import "./App.css";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";

function App() {
  return (
    <div className="app">
      <ContactListComponent />
      <ConversationComponent />
    </div>
  );
}

export default App;
