import "./Listapessoal.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Estrela } from "../../assets/estrela.svg";

class Listapessoal extends Component {
    constructor(props) {
        super(props);
        this.getFilmes = this.getFilmes.bind(this);
        this.state = {
            filmes: [{}],
            carregado: false,
        };
        this.excluir = this.excluir.bind(this);
    }

    componentDidMount() {
        this.getFilmes().then((result) => {
            this.setState({ filmes: result });
            this.setState({ carregado: true });
        });
        // let filmes = this.getFilmes();
        // console.log("Var Filmes: " + filmes);
        // this.setState({ filmes: filmes });
        // setTimeout(() => {
        //     console.log(this.state.filmes);
        // }, 5);
    }

    isEmpty(vetObj) {
        let vazio = true;
        vetObj.every((Obj) => {
            for (const id in Obj) {
                vazio = false;
                return false;
            }
            return true;
        });
        return vazio;
    }

    async getFilmes() {
        let resposta = JSON.parse(localStorage.getItem("@listaFilmes"));

        // console.log(response.data.results);
        if (resposta !== null && !this.isEmpty(resposta)) {
            // console.log("retornando resposta cheia");
            return resposta;
        } else {
            return false;
        }
    }

    excluir(id) {
        // const vetFilmes = this.state.filmes.splice(
        //     this.state.filmes.findIndex((filme) =>{
        //         return filme.id === id;
        //     }),
        //     1
        // );
        let vetFilmes = this.state.filmes;
        // console.log("antes de deletar: ");
        // console.log(vetFilmes);

        vetFilmes.splice(
            vetFilmes.findIndex((filme) => {
                return filme.id === id;
            }),
            1
        );

        // console.log("depois de deletar: ");
        // console.log(vetFilmes);
        if (this.isEmpty(vetFilmes)) {
            this.setState({ filmes: false });
        } else {
            this.setState({ filmes: vetFilmes });
        }

        localStorage.setItem("@listaFilmes", JSON.stringify(vetFilmes));
    }

    render() {
        // eslint-disable-next-line
        if (this.state.filmes !== false && this.state.filmes !== undefined) {
            //console.log(this.state.filmes);
            // console.log(
            //     "comparando: " + this.state.filmes + " diferente de false e undefined, resultado: " + (this.state.filmes !== false && this.state.filmes !== undefined)
            // );

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
                                        <img alt="imagem filme" src={"https://image.tmdb.org/t/p/original/" + filme.backdrop_path} />
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
                                        <a
                                            onClick={() => {
                                                this.excluir(filme.id);
                                            }}
                                        >
                                            Excluir
                                        </a>
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
                    <img alt="imagem carregamento" src={require("../../assets/carregando.gif")} />
                </div>
            );
        } else {
            // console.log(
            //     "comparando: " + this.state.filmes + " diferente de false e undefined, resultado: " + (this.state.filmes !== false && this.state.filmes !== undefined)
            // );
            return (
                <div className="container">
                    <ul className="containerFilme">
                        <li className="headerFilme">
                            <p>Você nao possui filmes salvos, salve algum para encontrá-los aqui!</p>
                        </li>
                    </ul>
                </div>
            );
        }
    }
}

export default Listapessoal;
