import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: this.props.usuarios,
            login: "",
            senha: "",
        };
        this.pegaDados = this.pegaDados.bind(this);
        this.login = React.createRef();
        this.senha = React.createRef();
    }

    pegaDados(e) {
        e.preventDefault();

        if (
            this.login.current.value !== "" &&
            this.senha.current.value !== ""
        ) {
            var tlogin, tsenha;
            tlogin = this.login.current.value;
            tsenha = this.senha.current.value;
            this.setState({ login: tlogin, senha: tsenha });
        }
    }

    render() {
        return (
            <form onSubmit={this.pegaDados}>
                <label>Login: </label>
                <input
                    ref={this.login}
                    type="text"
                    defaultValue={this.state.login}
                ></input>
                <br></br>
                <label>Senha: </label>
                <input ref={this.senha} type="password"></input>
                <br></br>
                <button type="submit">Enviar</button>
                <br></br>
                <div>
                    <h4>{this.state.login}</h4>
                    <h4>{this.state.senha}</h4>
                </div>
            </form>
        );
    }
}

export default Formulario;
