import React, { Component } from "react";
import Formulario from "./Components/Formulario/Formulario";
// import Login from "./Components/Login/Login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [
                { id: 1, nome: "Gilberto", login: "Gil123", senha: "123" },
                { id: 2, nome: "Guilherme", login: "Gui123", senha: "321" },
                { id: 3, nome: "Gustavo", login: "gu123", senha: "132" },
                { id: 4, nome: "Galvão", login: "Gal123", senha: "231" },
                { id: 5, nome: "Geraldo", login: "Ger123", senha: "333" },
            ],
        };
    }

    render() {
        return (
            <div>
                {/*                 {this.state.usuarios.map((item) => {
                    return (
                        <div>
                            
                                // Listagem dos usuarios
                                     <Login
                                key={item.id + "0"}
                                id={item.id}
                                nome={item.nome}
                                login={item.login}
                                senha={item.senha}
                            /> 
                            

                        </div>
                    );
                })}
 */}
                <Formulario usuarios={this.state.usuarios} />
            </div>
        );
    }
}

export default App;
