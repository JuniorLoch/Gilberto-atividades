import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: this.props.nome,
            login: this.props.login,
            senha: this.props.senha,
        };
    }

    render() {
        return (
            <ul key={this.props.id}>
                <li key={this.props.id + "1"}>
                    <p>Nome: {this.state.nome}</p>
                </li>
                <li key={this.props.id + "2"}>
                    <p>Login: {this.state.login}</p>
                </li>
                <li key={this.props.id + "3"}>
                    <p>Senha: {this.state.senha}</p>
                </li>
                <hr></hr>
            </ul>
        );
    }
}

export default Login;
