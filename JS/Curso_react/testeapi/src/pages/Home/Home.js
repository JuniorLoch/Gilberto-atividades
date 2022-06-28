import "./Home.css";
import React, { useEffect, useState } from "react";
import Artigo from "../../components/Artigo/Artigo";
import Cabecalho from "../../components/Cabecalho/Cabecalho";

// https://sujeitoprogramador.com/rn-api/?api=posts
function Home() {
    const [artigos, setArtigos] = useState([]);

    //"construtor" da funcao
    useEffect(() => {
        function Api() {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

            fetch(url)
                .then((result) => {
                    // se inicializar uma arrow function com as chaves é necessário especificar o que a mesma retorna com o return
                    return result.json();
                })
                .then((json) => {
                    setArtigos(json);
                });
        }

        Api();
    }, []);

    return (
        <div className="container">
            <Cabecalho />
            <Artigo vetartigos={artigos} />
        </div>
    );
}

export default Home;
