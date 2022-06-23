import React, { Component } from "react";

class Botoes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="botoes">
                <button>Start</button>
                <button>Clear</button>
            </div>
        );
    }
}

export default Botoes;
