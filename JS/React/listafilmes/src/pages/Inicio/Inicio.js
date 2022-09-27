import "./Inicio.css";
import React, { Component } from "react";

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container bemvindo">
                <div className="texto">bem vindo!</div>
                <div className="texto">Utilize o navegador para se mover pelo site</div>
                <div>
                    <span className="texto">não sei porque fiz essa página</span>
                    <span className="emoji">🤠</span>
                </div>
            </div>
        );
    }
}

export default Inicio;
