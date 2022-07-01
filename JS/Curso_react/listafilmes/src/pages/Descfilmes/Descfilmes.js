import "./Descfilmes.css";
import React, { Component } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { ReactComponent as Estrela } from "../../assets/estrela.svg";
import { ReactComponent as Relogio } from "../../assets/relogio.svg";
import { ReactComponent as Data } from "../../assets/data.svg";
import { ReactComponent as Dinheiro } from "../../assets/dinheiro.svg";

//cria um componente de maior ordem para poder chamar o hook useparams, pois no react v6+ não existe uma maneira de pegar o parametro da URL por class component
function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />;
    }
    return ComponentWithRouter;
}

class Descfilmes extends Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.params.id, filme: [], carregado: false, salvo: false, verificou: false };
        this.getFilmes = this.getFilmes.bind(this);
        this.salvarFilme = this.salvarFilme.bind(this);
        this.calculaTempo = this.calculaTempo.bind(this);
        this.verificaFilme = this.verificaFilme.bind(this);
    }

    async getFilmes() {
        const response = await api.get("/movie/" + this.state.id, {
            params: {
                api_key: "28fc232cc001c31e8a031f419d0a14ca",
                language: "pt-BR",
            },
        });

        return response.data;
    }

    componentDidMount() {
        // .then() pega o resultado de retorno e executa a funcao de callback quando terminar de executar a funcao
        this.getFilmes().then((result) => {
            this.setState({ filme: result, carregado: true });
            console.log(result);
        });
    }

    componentDidUpdate() {
        if (this.state.filme.id !== undefined && this.state.salvo === false && this.state.verificou === false) {
            this.setState({ salvo: this.verificaFilme(), verificou: true });
        }
    }

    salvarFilme() {
        //alert("salvar");
        //se existe a lista no localstorage, ele recebe a mesma, caso nao exista recebe o vetor vazio, pois se o primeir retornar undefined, a variavel recebe o valor no outro lado do ||
        //e.preventDefault();
        const listaFilmes = JSON.parse(localStorage.getItem("@listaFilmes")) || [];
        if (
            !listaFilmes.some((filmeLista) => {
                return filmeLista.id === this.state.filme.id;
            })
        ) {
            listaFilmes.push(this.state.filme);
            localStorage.setItem("@listaFilmes", JSON.stringify(listaFilmes));
            this.setState({ salvo: true, verificou: true });
        } else {
            alert("filme já está salvo");

            this.setState({ salvo: true, verificou: true });
        }
    }

    verificaFilme() {
        const listaFilmes = JSON.parse(localStorage.getItem("@listaFilmes")) || [];
        const filmeid = this.state.filme.id;
        //console.log(filmeid);
        if (filmeid === undefined) {
            console.log("state filme nao inicializado");
        }
        if (listaFilmes === []) {
            return false;
        } else {
            if (listaFilmes.some((filme) => filme.id === filmeid)) {
                return true;
            } else {
                return false;
            }
        }
    }

    calculaTempo() {
        var tempo, horas;
        if (this.state.carregado) {
            var filme = this.state.filme;

            if (filme.runtime > 59) {
                // console.log("minutos inteiro: " + filme.runtime);
                horas = Math.floor(filme.runtime / 60);
                filme.runtime = filme.runtime % 60;
                // console.log("horas: " + horas + " minutos: " + filme.runtime);
                tempo = (horas < 10 ? "0" + horas : horas) + ":" + (filme.runtime < 10 ? "0" + filme.runtime + ":00" : filme.runtime + ":00");
            } else {
                tempo = "00:" + (filme.runtime < 10 ? "0" + filme.runtime : filme.runtime) + ":00";
            }
        }

        return tempo;
    }

    render() {
        if (this.state.carregado) {
            var filme = this.state.filme;
            // console.log(this.state.filme);
        }

        var formatdolar = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

        return this.state.carregado ? (
            <div
                className="containerDetfilme"
                // eslint-disable-next-line no-restricted-globals
                style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/' + filme.backdrop_path, filter: blur("2rem") }}
            >
                <div className="containerDesc">
                    <ul>
                        <li className="cabecalhoDesc">
                            <img alt="imagem de capa" src={"https://image.tmdb.org/t/p/original/" + filme.poster_path}></img>
                            <div className="atribDesc">
                                <div>
                                    <h1>{filme.title}</h1>
                                    <button className={this.state.salvo ? "bt btSalvo" : "bt btSalvar"} onClick={this.salvarFilme}>
                                        {this.state.salvo ? "Filme Salvo!" : "Salvar"}
                                    </button>
                                </div>

                                <p>
                                    Nome original ({filme.original_language}): {filme.original_title}
                                </p>
                                <p>
                                    <Estrela /> {filme.vote_average}/10 ({filme.vote_count} Votos)
                                </p>
                                <p>
                                    <Data /> {filme.release_date}
                                </p>
                                <p>
                                    <Relogio />

                                    {
                                        //eslint-disable-next-line
                                        this.calculaTempo() == undefined ? "Não encontrado" : this.calculaTempo()
                                    }
                                </p>
                                <p>
                                    <Dinheiro />
                                    {formatdolar.format(filme.revenue)}
                                </p>
                                <p>{filme.tagline}</p>
                                <p>{filme.overview}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="containerDetalhes">
                    <table>
                        <th>Gêneros</th>
                        {React.Children.toArray(
                            filme.genres.map((genero) => {
                                return <tr>{genero.name}</tr>;
                            })
                        )}
                    </table>
                    <table>
                        <th>Idiomas falados</th>
                        {React.Children.toArray(
                            filme.spoken_languages.map((lingua) => {
                                return <tr>{lingua.english_name}</tr>;
                            })
                        )}
                    </table>
                    <table>
                        <th>Companhias envolvidas</th>
                        {React.Children.toArray(
                            filme.production_companies.map((conpanhia) => {
                                return <tr>{conpanhia.name + " - " + conpanhia.origin_country}</tr>;
                            })
                        )}
                    </table>
                </div>
            </div>
        ) : (
            <div id="telacarregando">
                <p>Carregando</p>
                <img alt="imagem carregando" src={require("../../assets/carregando.gif")} />
            </div>
        );
    }
}

const HOCDescfilmes = withRouter(Descfilmes);

export default HOCDescfilmes;
