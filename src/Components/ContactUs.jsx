import { easeInOut, motion } from "framer-motion";
import "../Styles/comp_styles.css";

export const ContactUs = () => {
  return (
    <>
      <motion.div
        className="form-container"
        initial={{ opacity: 0, scale: 0.5, type: "spring" }}
        animate={{ opacity: 1, scale: 1, type: "spring" }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
};
