import React, { useState, useRef } from "react";
import "./App.css";
// import firebase from "./firebaseConnection";

function App() {
    //dentro de usestate() se passa o valor padrao desse estado
    const [nome, setNome] = useState("test");
    const [dataNasc, setDataNasc] = useState(new Date("11/04/2022"));
    const [sexo, setSexo] = useState("masculino");

    const rnome = useRef();
    const rdatanasc = useRef();
    const rmasc = useRef();
    const rfem = useRef();

    function pegaDados(e) {
        e.preventDefault();

        console.log(rnome.current.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Firebase test</p>

                <form onSubmit={pegaDados} className="inputs">
                    <label>Nome</label>
                    <input ref={rnome} type="text"></input>
                    <label>Data de nascimento</label>
                    <input ref={rdatanasc} type="date"></input>
                    <label>Sexo</label>
                    <div className="radioselecao">
                        <input ref={rmasc} type="radio" name="sexo" value="masculino"></input>
                        <label htmlFor="masculino">masculino</label>
                        <input ref={rfem} type="radio" name="sexo" value="feminino"></input>
                        <label htmlFor="feminino">feminino</label>
                    </div>
                    <div className="btcont">
                        <button>Enviar</button>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
