import "./Descfilmes.css";
import React, { Component } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

//cria um componente de maior ordem para poder chamar o hook useparams, pois no react v6 + não existe uma maneira de pegar o parametro da URL por class component
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
        this.state = { id: this.props.params.id };
        this.getFilmes = this.getFilmes.bind(this);
    }

    async getFilmes() {
        /*
        const response = await api.get("movie/" + this.props.id, {
            params: {
                api_key: "28fc232cc001c31e8a031f419d0a14ca",
                language: "pt-BR",
            },
        });


        return response.data.results;
        */
    }

    render() {
        return (
            <div>
                <p>PAGINA DESCFILME ID {this.state.id}</p>
            </div>
        );
    }
}

const HOCDescfilmes = withRouter(Descfilmes);

export default HOCDescfilmes;
