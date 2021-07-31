import ContactComponent from "./ContactComponent";
import { contactList } from "../mockData";
import "./ContactListComponent.css";

const ContactListComponent = (props) => {
  return (
    <div className="contact">
      <div className="profileInfo">
        <img
          className="profileImage"
          src="https://avatars.githubusercontent.com/u/20269286?v=4"
          alt="Profile Pic"
        />
      </div>
      <div className="searchBox">
        <div className="searchContainer">
          <img
            className="searchIcon"
            src="https://raw.githubusercontent.com/ayushkul/whatsapp-clone/de41b50690e0071d39dc67fbaca4f7ab2d09a966/client/public/search-icon.svg"
            alt="Search"
          />
          <input
            className="searchInput"
            type="text"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>{" "}
      {contactList.map((userData) => (
        <ContactComponent userData={userData} setChat={props.setChat} />
      ))}
      "ContactListComponent"
    </div>
  );
};

export default ContactListComponent;
