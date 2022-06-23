import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: this.props.usuarios,
            msg: "",
            login: "",
            senha: "",
        };
        this.pegaDados = this.pegaDados.bind(this);
        this.login = React.createRef();
        this.senha = React.createRef();
        this.nome = React.createRef();
    }

    pegaDados(e) {
        e.preventDefault();
        // eslint-disable-next-line
        if (this.login.current.value != "" && this.senha.current.value != "") {
            var tlogin, tsenha;
            tlogin = this.login.current.value;
            tsenha = this.senha.current.value;

            this.state.usuarios.every((usuario, index) => {
                console.log(usuario);
                var msg;
                var tamanho = this.state.usuarios.length - 1;
                // eslint-disable-next-line
                if (usuario.login == tlogin && usuario.senha == tsenha) {
                    msg = "Bem vindo " + usuario.nome;
                    this.setState({ login: tlogin, senha: tsenha, msg: msg });
                    console.log(this.state.msg);
                    return false;
                } else {
                    // eslint-disable-next-line
                    if (index == tamanho) {
                        msg = "Usuario não encontrado, ou credenciais incorretas!!";
                        this.setState({ login: "", senha: "", msg: msg });
                    }
                    return true;
                }
            });
        } else {
            alert("Login ou senha vazios!");
            this.setState({ login: "", senha: "", msg: "Dados incorretos!" });
        }
    }

    render() {
        return (
            <form onSubmit={this.pegaDados}>
                <label>Login: </label>
                <input ref={this.login} type="text" defaultValue={this.state.login}></input>
                <br></br>
                <label>Senha: </label>
                <input ref={this.senha} type="password"></input>
                <br></br>
                <button type="submit">Enviar</button>
                <br></br>
                <div>
                    <h4>{this.state.msg}</h4>
                    {this.state.login && <h4>Login: {this.state.login}</h4>}
                    {this.state.senha && <h4>Senha: {this.state.senha}</h4>}
                </div>
            </form>
        );
    }
}

export default Formulario;
