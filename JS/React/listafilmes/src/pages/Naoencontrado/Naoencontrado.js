import React, { Component } from "react";
import { Link } from "react-router-dom";

class Naoencontrado extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>Pagina nao encontrada</h2>
                <Link to="/">
                    <button>Retornar ao inicio</button>
                </Link>
            </div>
        );
    }
}

export default Naoencontrado;
