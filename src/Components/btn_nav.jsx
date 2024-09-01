import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/comp_styles.css";

export const ButtonNav = ({ dir, text }) => {
  return (
    <>
      <Link className="link_nav" to={dir}>
        {text}
      </Link>
    </>
  );
};

ButtonNav.propTypes = {
  dir: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
