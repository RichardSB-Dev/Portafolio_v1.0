import { motion } from "framer-motion";
import "../Styles/comp_styles.css";

export const DirButton = ({ texto, dir, icon }) => {
  return (
    <div className="dirButton_container">
      <a href={dir} className="a_dir" target="_blank">
        <motion.button
          className="dir_btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: [0.9, 1] }}
        >
          <span className="dir_span">{texto}</span>
          <div className="iconDir_container">
            <img src={icon} className="icon_dir" />
          </div>
        </motion.button>
      </a>
    </div>
  );
};
