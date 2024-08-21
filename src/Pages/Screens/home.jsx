import "../../Styles/home_styles.css";
import { Nav, DirButton } from "../../Components";

export const Home = () => {
  return (
    <>
      <div className="contenedor">
        <div className="btn_ref cv">
          <DirButton
            texto="Descargar CV"
            dir="#"
            icon="../../Public/Images/right_arrow.jpg"
          />
        </div>
        <div className="btn_ref ghb">
          <DirButton
            texto="Ir a Github"
            dir="#"
            icon="../../Public/Images/logo_github.jpg"
          />
        </div>
        <Nav />
      </div>
    </>
  );
};
