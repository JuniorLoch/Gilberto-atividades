import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";

//componentes
import Cabecalho from "./components/Cabecalho/Cabecalho";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas/:id" element={<Reservas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
