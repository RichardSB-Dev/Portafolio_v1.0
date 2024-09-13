import { Route, Routes } from "react-router-dom";
import { DirButton, Nav } from "./Components";
import { Home, About, Contact, Proyects } from "./Pages/Screens";
import "./global.css";
import { easeInOut, motion } from "framer-motion";

const urlGithub = "https://github.com/RichardSB-Dev";

export const App = () => {
  return (
    <>
      <div className="contenedor_App">
        <motion.div
          className="btn_ref cv"
          initial={{ y: -100, scale: 0.8 }}
          animate={{ y: 0, scale: 1, type: "spring" }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <DirButton
            texto="Descargar CV"
            dir="#"
            icon="src/Public/Images/right_arrow.jpg"
          />
        </motion.div>
        <motion.div
          className="btn_ref ghb"
          initial={{ x: -200, scale: 0.8 }}
          animate={{ x: 0, scale: 1, type: "spring" }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <DirButton
            texto="Ir a Github"
            dir={urlGithub}
            icon="src/Public/Images/logo_github.jpg"
          />
        </motion.div>
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
