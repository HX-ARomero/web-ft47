import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Error from "./views/Error.jsx";
import Home from "./views/Home";
import Navbar from "./components/Navbar.jsx";
import Landing from "./views/Landing.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {
        pathname !== "/" ? <Navbar /> : null
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
