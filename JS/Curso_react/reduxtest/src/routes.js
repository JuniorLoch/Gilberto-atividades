import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";

//componentes
function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
