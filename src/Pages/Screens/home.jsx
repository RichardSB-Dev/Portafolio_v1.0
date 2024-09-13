import { easeInOut, motion } from "framer-motion";
import "../../Styles/home_styles.css";

export const Home = () => {
  return (
    <>
      <div className="home_contenedor">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeInOut, duration: 2 }}
          className="text_container"
        >
          <p className="saludo">Hello world, Im</p>
          <span className="name">Richard Bonilla</span>
          {/* componente de letras animadas */}
          <p className="despedida">Welcome to my personal website 👋</p>
        </motion.div>
        <motion.div
          className="img_container"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, type: "spring" }}
          transition={{ duration: 1, ease: easeInOut }}
        >
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
