import { easeIn, motion } from "framer-motion";
import "../../Styles/about_styles.css";

export const About = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit maxime totam mollitia, inventore consectetur dolores harum voluptatibus tempore laudantium optio, aliquid voluptates quasi accusamus ipsa odio amet, nesciunt suscipit!";

  return (
    <>
      <motion.div
        className="about_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="info_container">
          <span className="title_info">
            LET ME <label>INTRODUCE</label> MYSELF
          </span>
          <motion.p
            className="personal_info"
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, easeIn }}
          >
            {text}
          </motion.p>
          <motion.p
            className="personal_info"
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5, easeIn }}
          >
            {text}
          </motion.p>
          <motion.p
            className="personal_info"
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, easeIn }}
          >
            {text}
          </motion.p>
          <motion.p
            className="personal_info"
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6.5, easeIn }}
          >
            {text}
          </motion.p>
        </div>

        <motion.img
          src="src/public/Images/perfil2.jpg"
          alt="Richard Bonilla"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 8 }}
        />
      </motion.div>
    </>
  );
};
