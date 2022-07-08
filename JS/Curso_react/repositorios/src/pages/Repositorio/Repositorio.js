import React, { useEffect, useState } from "react";
import { Painel, Container, ContainerBtIssues, Repos, Imagem, BtVoltar, Texto, IssueList, PainelLabel, PainelNav, BtInfo } from "../../Styles/styles";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";
import api from "../../Services/apiGithub";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Repositorios() {
    const local = useLocation();
    const [repositorio, setRepositorio] = useState();
    const [issues, setIssues] = useState();
    const [carregado, setCarregado] = useState(false);
    const [page, setPage] = useState(1);
    const [issueState, setIssueState] = useState("open");

    useEffect(() => {
        const repo = local.state;

        async function setStates() {
            await setRepositorio(repo);
            // console.log(repo);
            api.get("/repos/" + repo.full_name + "/issues", { params: { state: issueState, per_page: 5, page: page } }).then((resp) => {
                // console.log(resp.data);
                setIssues(resp.data);
                setCarregado(true);
            });
        }
        setStates();
    }, [local.state, page, issueState]);

    function trocaPag(aumentar) {
        console.log(aumentar);
        if (!aumentar) {
            setPage(page + 1);
        } else {
            if (page - 1 === 0) {
                setPage(1);
            } else {
                setPage(page - 1);
            }
        }
    }

    function trocaIssueState(estado) {
        if (estado === "open" || estado === "closed" || estado === "all") {
            setIssueState(estado);
        } else {
            toast.error("parametros errados: " + estado);
        }
    }

    return carregado ? (
        <Container>
            <Painel direction="column">
                <Repos>
                    <Link to="/">
                        <BtVoltar type="button">
                            <AiOutlineArrowLeft color="#FFF" size="8vh" />
                        </BtVoltar>
                    </Link>
                    <h1>{repositorio.name}</h1>
                    <Imagem>
                        <a href={repositorio.owner.html_url}>
                            <p>Criador: {repositorio.owner.login}</p>

                            <img alt="imagem criador" src={repositorio.owner.avatar_url}></img>
                        </a>
                    </Imagem>
                    <Texto tamanho="2.5vh" margin="2vh 0 3vh 0">
                        <h1>{repositorio.description}</h1>
                    </Texto>

                    {issues.length > 0 ? (
                        <>
                            <IssueList>
                                <h1>
                                    {/*issueState*/} Issues {issueState === "open" ? " Abertos" : issueState === "closed" ? " Fechados" : ""}
                                </h1>
                                <Container>
                                    <ContainerBtIssues>
                                        <BtInfo
                                            onClick={() => {
                                                trocaIssueState("all");
                                            }}
                                        >
                                            <BsCheckAll color="#FFF" size="8vh" />
                                        </BtInfo>
                                        <BtInfo
                                            onClick={() => {
                                                trocaIssueState("open");
                                            }}
                                        >
                                            <FaDoorOpen color="#FFF" size="8vh" />
                                        </BtInfo>
                                        <BtInfo
                                            onClick={() => {
                                                trocaIssueState("closed");
                                            }}
                                        >
                                            <FaDoorClosed color="#FFF" size="8vh" />
                                        </BtInfo>
                                    </ContainerBtIssues>
                                </Container>
                                {React.Children.toArray(
                                    issues.map((issue) => {
                                        return (
                                            <a href={issue.html_url}>
                                                <p>
                                                    <Container alinha="center">
                                                        <img alt="" src={issue.user.avatar_url} />
                                                        {issue.user.login} : {issue.title}
                                                    </Container>

                                                    <PainelLabel>
                                                        {issue.labels.map((label) => {
                                                            return <label>{label.name}</label>;
                                                        })}
                                                    </PainelLabel>
                                                </p>
                                            </a>
                                        );
                                    })
                                )}
                            </IssueList>
                            <PainelNav>
                                <BtInfo
                                    type="button"
                                    onClick={() => {
                                        trocaPag(true);
                                    }}
                                >
                                    <AiOutlineArrowLeft color="#FFF" size="8vh" />
                                </BtInfo>
                                <h1>Pagina {page}</h1>
                                <BtInfo
                                    type="button"
                                    onClick={() => {
                                        trocaPag(false);
                                    }}
                                >
                                    <AiOutlineArrowRight color="#FFF" size="8vh" />
                                </BtInfo>
                            </PainelNav>
                        </>
                    ) : (
                        <h1>Não existem issues nesse repositório</h1>
                    )}
                </Repos>
            </Painel>
        </Container>
    ) : (
        <Container>
            <Painel>
                <Imagem>
                    <h1>Carregando</h1>
                    <img alt="imagem carregando" src={require("../../assets/carregando.gif")}></img>
                </Imagem>
            </Painel>
        </Container>
    );
}

export default Repositorios;
