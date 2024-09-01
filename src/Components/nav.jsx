import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ButtonNav } from "../Components";
import "../Styles/comp_styles.css";

export const Nav = ({ routes = [] }) => {
  console.log(routes);

  return (
    <>
      <div className="nav_container">
        <Link to={"/"} className="logo">
          LOGO
        </Link>
        <div className="btns_container">
          {routes.map(
            (route) =>
              route.name !== "home" && (
                <ButtonNav
                  key={route.name}
                  dir={route.path}
                  text={route.name}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
};
