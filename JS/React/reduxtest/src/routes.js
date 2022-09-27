import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./services/history";

//paginas
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";

//componentes
import Cabecalho from "./components/Cabecalho/Cabecalho";

function RoutesApp() {
    return (
        <BrowserRouter history={history}>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
