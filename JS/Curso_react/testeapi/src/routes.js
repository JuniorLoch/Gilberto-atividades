import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Descricao from "./pages/Descricao/Descricao";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/descricao/:id" element={<Descricao />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
