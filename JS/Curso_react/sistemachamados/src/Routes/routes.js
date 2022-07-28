import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import React from "react";

//paginas
import Login from "../pages/Login/Login";
import Chamados from "../pages/Chamados/Chamados";
import Cadastro from "../pages/Cadastro/Cadastro";
import Perfil from "../pages/Perfil/Perfil";
import Clientes from "../pages/Clientes/Clientes";
import Configuracoes from "../pages/Configuracoes/Configuracoes";
import NovoChamado from "../pages/NovoChamado/NovoChamado";

//componentes
import Menu from "../components/Menu/Menu";
import { ContainerPaginas } from "../styles/Styles";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/chamados"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <Chamados />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/novochamado"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <NovoChamado />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/novochamado/:id"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <NovoChamado />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <Perfil />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/clientes"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <Clientes />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/clientes/:id"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <Clientes />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/configuracoes"
                    element={
                        <PrivateRoute>
                            <ContainerPaginas>
                                <Menu />
                                <Configuracoes />
                            </ContainerPaginas>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/cadastro"
                    element={
                        <PrivateRoute>
                            <Cadastro />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Login />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
