import "../Styles/comp_styles.css";

export const ButtonNav = ({ dir, text }) => {
  return (
    <>
      <a href={dir} className="a_btn_nav">
        <button className="btn_nav">
          <span className="span_nav">{text}</span>
        </button>
      </a>
    </>
  );
};
