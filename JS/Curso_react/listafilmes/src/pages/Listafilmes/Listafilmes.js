import "./Listafilmes.css";
import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { ReactComponent as Estrela } from "../../assets/estrela.svg";

class Listafilmes extends Component {
    constructor(props) {
        super(props);
        this.getFilmes = this.getFilmes.bind(this);
        this.state = {
            filmes: [{}],
            carregado: false,
        };
    }

    componentDidMount() {
        this.getFilmes().then((result) => {
            this.setState({ filmes: result });
        });
        setTimeout(() => {
            this.setState({ carregado: true });
        }, 1000);
        // let filmes = this.getFilmes();
        // console.log("Var Filmes: " + filmes);
        // this.setState({ filmes: filmes });
        // setTimeout(() => {
        //     console.log(this.state.filmes);
        // }, 5);
    }

    async getFilmes() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "28fc232cc001c31e8a031f419d0a14ca",
                language: "pt-BR",
                page: 1,
            },
        });

        return response.data.results;
    }

    render() {
        return this.state.carregado ? (
            <div className="container">
                {React.Children.toArray(
                    this.state.filmes.map((filme) => {
                        return (
                            <ul className="containerFilme">
                                <li className="headerFilme">
                                    <p>{filme.title}</p>
                                    <p>{filme.release_date}</p>
                                </li>
                                <li className="inglesFilme">{filme.original_title}</li>
                                <li className="imagemFilme">
                                    <img src={"https://image.tmdb.org/t/p/original/" + filme.backdrop_path} />
                                </li>
                                <li className="descFilme">
                                    <div>Descricao: </div>
                                    <div>{filme.overview}</div>
                                </li>
                                <li className="avalFilme">
                                    <div>
                                        Avaliacao: {filme.vote_average} <Estrela />
                                    </div>
                                    <div>{filme.vote_count} votos</div>
                                </li>
                                <li className="btsFilme">
                                    <a href={"https://www.youtube.com/results?search_query=" + filme.title + "+trailer"}>Assistir Trailer</a>
                                    <Link to={"/descricao/" + filme.id}> Mais detalhes </Link>
                                </li>
                            </ul>
                        );
                    })
                )}
            </div>
        ) : (
            <div id="telacarregando">
                <p>Carregando</p>
                <img src={require("../../assets/carregando.gif")} />
            </div>
        );
    }
}

export default Listafilmes;
