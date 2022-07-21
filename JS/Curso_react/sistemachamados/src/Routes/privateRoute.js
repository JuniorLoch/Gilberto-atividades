import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import Carregando from "../pages/Carregando/Carregando";

function RouteWrapper({ children }) {
    const { logado, carregando } = useContext(AuthContext);

    if (carregando) {
        return <Carregando />;
    }

    // console.log(children);
    // console.log(carregando);
    // if (children.length) {
    //     children.every((child) => {
    //         if (child.type.name !== "Menu") {
    //             if (child.type.name === "Login" || child.type.name === "Cadastro") {
    //                 return logado ? <Navigate to="/chamados" /> : children;
    //             } else {
    //                 return logado ? children : <Navigate to="/" />;
    //             }
    //         }
    //     });
    // } else {
    if (children.type.name === "Login" || children.type.name === "Cadastro") {
        return logado ? <Navigate to="/chamados" /> : children;
    } else {
        return logado ? children : <Navigate to="/" />;
    }
    // }
}
export default RouteWrapper;
