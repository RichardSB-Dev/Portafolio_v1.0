import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { easeInOut, motion } from "framer-motion";

import { ButtonNav } from "../Components";
import "../Styles/comp_styles.css";

export const Nav = ({ routes = [] }) => {
  console.log(routes);

  return (
    <>
      <motion.div
        className="nav_container"
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        <Link to={"/"} className="logo">
          LOGO
        </Link>
        <motion.div
          className="btns_container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
        >
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
        </motion.div>
      </motion.div>
    </>
  );
};

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
};
