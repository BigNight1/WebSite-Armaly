import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Redes from "./Components/Redes/Redes.jsx";
import PageError from "./Components/PageError/PageError.jsx";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminos-y-condiciones" element={<Terms />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="*" element={<PageError/>} />
      </Routes>
    </div>
  );
}

export default App;
