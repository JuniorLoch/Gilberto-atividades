import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import React, { Fragment } from "react";

//paginas
import Login from "../pages/Login/Login";
import Chamados from "../pages/Chamados/Chamados";
import Registro from "../pages/Registro/Registro";

//componentes

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route
                        path="/chamados"
                        element={
                            <PrivateRoute>
                                <Chamados />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/registro" element={<Registro />}></Route>
                    <Route path="/" element={<Login />}></Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;
