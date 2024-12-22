import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>No existe la pagina</h1>} />
      </Routes>
    </div>
  );
}

export default App;
