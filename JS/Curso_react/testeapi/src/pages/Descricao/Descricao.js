import "./Descricao.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Descricao() {
    const { id } = useParams();
    const [Artigo, setArtigo] = useState([]);

    useEffect(() => {
        function getArtigo() {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

            fetch(url)
                .then((result) => {
                    // se inicializar uma arrow function com as chaves é necessário especificar o que a mesma retorna com o return
                    return result.json();
                })
                .then((json) => {
                    //every: return 0 ou false para parar o loop, 1 ou true para continuar o loop
                    return json.every((item) => {
                        console.log("comparando: " + item.id + " com url: " + id);
                        // eslint-disable-next-line
                        if (item.id == id) {
                            setArtigo(item);
                            return false;
                        } else {
                            return true;
                        }
                    });
                });
        }
        getArtigo();
    }, [id]);

    return (
        <div>
            <Cabecalho />
            <article className="artdesc container">
                <h3>{Artigo.titulo}</h3>
                <div className="catdesc">
                    <label>{Artigo.categoria}</label>
                </div>
                <img alt="imgartdesc" src={Artigo.capa} />
                <h4 className="contdesc">{Artigo.subtitulo}</h4>
            </article>
        </div>
    );
}

export default Descricao;
