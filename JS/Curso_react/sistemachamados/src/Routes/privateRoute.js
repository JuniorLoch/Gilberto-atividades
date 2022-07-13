import React from "react";
import { Navigate } from "react-router-dom";

function RouteWrapper({ children }) {
    const carregando = false;
    const logado = false;

    if (carregando) {
        return <div>Carregando</div>;
    }

    return logado ? children : <Navigate to="/" />;
}
export default RouteWrapper;
