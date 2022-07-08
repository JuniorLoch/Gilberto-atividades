import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import Home from "./pages/Home/Home";
import Repositorio from "./pages/Repositorio/Repositorio";

//componentes

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositorio/:repositorio" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
