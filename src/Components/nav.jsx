import { ButtonNav } from "../Components";
import "../Styles/comp_styles.css";

export const Nav = () => {
  return (
    <>
      <div className="nav_container">
        <span className="logo">LOGO</span>
        <div className="btns_container">
          <ButtonNav dir={"#"} text={"About"} />
          <ButtonNav dir={"#"} text={"Contact"} />
          <ButtonNav dir={"#"} text={"Portafolio"} />
          <ButtonNav dir={"#"} text={"Proyects"} />
        </div>
      </div>
    </>
  );
};
