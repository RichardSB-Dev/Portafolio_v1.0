import "../../Styles/home_styles.css";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="home_contenedor">
        <motion.div
          transition={{ ease: "easeOut", duration: 2 }}
          className="text_container"
        >
          <p className="saludo">Hello world, Im</p>
          <span className="name">Richard Bonilla</span>
          {/* componente de letras animadas */}
          <p className="despedida">Welcome to my personal website 👋</p>
        </motion.div>
        <motion.div className="img_container">
          <img
            className="personal_img"
            src="src/public/Images/perfilImg.jpg"
            alt="Richard Bonilla"
          />
        </motion.div>
      </div>
    </>
  );
};
