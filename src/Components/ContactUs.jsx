import "../Styles/comp_styles.css";

export const ContactUs = () => {
  return (
    <>
      <div className="form-container">
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
      </div>
    </>
  );
};
