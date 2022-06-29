import React, { Component } from "react";
import { Link } from "react-router-dom";

//css
import "./Navegador.css";

//svgs
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Filmes } from "../../assets/filme.svg";
import { ReactComponent as Salvos } from "../../assets/lista.svg";

class Navegador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fechanav: true,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.fechaNav = this.fechaNav.bind(this);
    }

    toggleNav() {
        this.setState({
            fechanav: !this.state.fechanav,
        });
    }

    fechaNav() {
        this.setState({
            fechanav: true,
        });
    }

    render() {
        return (
            <ul id="navegador">
                <header onClick={this.toggleNav} className={this.state.fechanav ? "" : "navheadabre"}>
                    <Menu />
                    <h2>Navegador</h2>
                </header>
                <Link to="/">
                    <li onClick={this.fechaNav} className={this.state.fechanav ? "fechanav" : "abrenav"}>
                        <Home />
                        <p>Inicio</p>
                    </li>
                </Link>
                <Link to="/filmes">
                    <li onClick={this.fechaNav} className={this.state.fechanav ? "fechanav" : "abrenav"}>
                        <Filmes />
                        <p>Filmes</p>
                    </li>
                </Link>
                <Link to="/meusfilmes">
                    <li onClick={this.fechaNav} className={this.state.fechanav ? "fechanav" : "abrenav"}>
                        <Salvos />
                        <p>Meus Filmes</p>
                    </li>
                </Link>
            </ul>
        );
    }
}

export default Navegador;
