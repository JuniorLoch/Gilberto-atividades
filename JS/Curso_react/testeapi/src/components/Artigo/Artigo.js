import "./Artigo.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Artigo(props) {
    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setArtigos(props.vetartigos);
        }, 10);
    }, [props.vetartigos]);

    return (
        <div id="artigos">
            {artigos.map((artigo) => {
                return (
                    <Link key={artigo.id} to={"/descricao/" + artigo.id}>
                        <article className="artigo">
                            <img alt="imgartigo" src={artigo.capa} />
                            <div className="conteudo">
                                <h3>{artigo.titulo}</h3>
                                <label>{artigo.categoria}</label>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
}

export default Artigo;
