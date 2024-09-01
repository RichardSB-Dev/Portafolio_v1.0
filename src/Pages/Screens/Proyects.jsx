import { ProyectsCard } from "../../Components/Cards/ProyectsCard";
import "../../Styles/proyects_styles.css";

export const Proyects = () => {
  return (
    <div className="proyects_container">
      <h1>Front-End</h1>
      <div className="cards-proyects_container">
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
      </div>
      <h1>Back-End</h1>
      <div className="cards-proyects_container">
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
      </div>
      <h1>Movil</h1>
      <div className="cards-proyects_container">
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
      </div>
    </div>
  );
};
