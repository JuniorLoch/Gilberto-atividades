import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";

//paginas
import Inicio from "./pages/Inicio/Inicio";
import Descfilmes from "./pages/Descfilmes/Descfilmes";
import Listafilmes from "./pages/Listafilmes/Listafilmes";
import Listapessoal from "./pages/Listapessoal/Listapessoal";
import Naoencontrado from "./pages/Naoencontrado/Naoencontrado";

//componentes
import Cabecalho from "./components/Cabecalho/Cabecalho";
//import Navegador from "./components/Navegador/Navegador";

class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Cabecalho />
                {/* <Navegador /> */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/descricao/:id" element={<Descfilmes />} />
                    <Route path="/filmes" element={<Listafilmes />} />
                    <Route path="/meusfilmes" element={<Listapessoal />} />
                    <Route path="*" element={<Naoencontrado />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RoutesApp;
