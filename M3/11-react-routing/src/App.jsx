import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Error from "./views/Error.jsx";
import Home from "./views/Home";
import Navbar from "./components/Navbar.jsx";
import Landing from "./views/Landing.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Home />
      <Detail />
      <About />
      <Error />
    </>
  );
}

export default App;
