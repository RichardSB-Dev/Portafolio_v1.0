import { Route, Routes } from "react-router-dom";
import { DirButton, Nav } from "./Components";
import { Home, About, Contact, Proyects } from "./Pages/Screens";
import "./global.css";

const urlGithub = "https://github.com/RichardSB-Dev";

export const App = () => {
  return (
    <>
      <div className="contenedor_App">
        <div className="btn_ref cv">
          <DirButton
            texto="Descargar CV"
            dir="#"
            icon="src/Public/Images/right_arrow.jpg"
          />
        </div>
        <div className="btn_ref ghb">
          <DirButton
            texto="Ir a Github"
            dir={urlGithub}
            icon="src/Public/Images/logo_github.jpg"
          />
        </div>
        <Nav routes={routes} />
        <Routes>
          {routes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;

const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "portafolio",
    path: "/portafolio",
    element: <Home />,
  },
  {
    name: "proyects",
    path: "/proyects",
    element: <Proyects />,
  },
];
