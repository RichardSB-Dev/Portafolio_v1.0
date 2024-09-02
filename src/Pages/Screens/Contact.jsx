import { ContactUs, SocialsIcons } from "../../Components";
import "../../Styles/contact_styles.css";

export const Contact = () => {
  return (
    <>
      <div className="ContactUs_container">
        <ContactUs />
        <div className="icons_container">
          <SocialsIcons />
        </div>
      </div>
    </>
  );
};
