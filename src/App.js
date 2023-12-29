import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import BomboneraContainer from './Components/BomboneraContainer/BomboneraContainer.js';
import Bombonera360 from "./Components/BomboneraContainer/Bombonera/Bombonera360/Bombonera360";
import BomboneraActual from "./Components/BomboneraContainer/Bombonera/BomboneraActual/BomboneraActual";
import BomboneraNueva from "./Components/BomboneraContainer/Bombonera/BomboneraNueva/BomboneraNueva";
import ProyectoEsloveno from "./Components/BomboneraContainer/Bombonera/ProyectoEsloveno/ProyectoEsloveno";
import BomboneraSigloXXI from "./Components/BomboneraContainer/Bombonera/BomboneraSigloXXI/BomboneraSigloXXI";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<BomboneraContainer/>}/>
          <Route path="/LaBombonera" element={<BomboneraActual/>}/>
          <Route path="/Bombonera360" element={<Bombonera360/>}/>
          <Route path="/NuevaBombonera" element={<BomboneraNueva/>}/>
          <Route path="/BomboneraSigloXXI" element={<BomboneraSigloXXI/>}/>
          <Route path="/ProyectoEsloveno" element={<ProyectoEsloveno/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
