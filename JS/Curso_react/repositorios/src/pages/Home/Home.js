import React, { useRef, useState, useEffect } from "react";
import { Container, Formulario, Painel, Repos, BtAdd, BtRem, BtInfo, ContainerBt, Imagem } from "../../Styles/styles";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { toast } from "react-toastify";
import api from "../../Services/apiGithub";
import translate from "translate";
import { Link } from "react-router-dom";

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

function Home() {
    const rRepo = useRef();

    const [repositorios, setrepositorios] = useState([{ id: 17 }]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        var LS = JSON.parse(localStorage.getItem("@listaRepos"));
        if (LS) {
            setrepositorios(LS);
        }
        setCarregado(true);
    }, []);

    function cdLocalStorage(adicionar, item) {
        var LS = JSON.parse(localStorage.getItem("@listaRepos"));
        if (adicionar) {
            if (LS) {
                localStorage.setItem("@listaRepos", JSON.stringify([...LS, item]));
                // toast.success("adicionado no localstorage");
            } else {
                localStorage.setItem("@listaRepos", JSON.stringify([item]));
                // toast.success("adicionado no localstorage");
            }
        } else {
            if (LS) {
                var indexls = LS.findIndex((itemls) => {
                    return itemls.id === item;
                });
                // console.log("id item remover: " + item + " posicao localstorage: " + indexls);
                LS.splice(indexls, 1);
                localStorage.setItem("@listaRepos", JSON.stringify([...LS]));
            } else {
                toast.error("erro ao salvar no armazenamento local");
            }
        }
    }

    function addRepo() {
        // rRepo.current.value ? toast.info(rRepo.current.value) : toast.info("Campo vazio");
        if (rRepo.current.value) {
            api.get("repos/" + rRepo.current.value)
                .then((data) => {
                    // toast.success("repositorio encontrado!");
                    // console.log(data);
                    setrepositorios([...repositorios, data.data]);
                    cdLocalStorage(true, data.data);
                    rRepo.current.value = "";
                    toast.success("Repositório encontrado! ");
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status === 404) {
                            toast.error("Repositório não encontrado!");
                            rRepo.current.value = "";
                        } else {
                            translate(error, "pt").then((traderror) => {
                                toast.error(traderror);
                                rRepo.current.value = "";
                            });
                        }
                    } else {
                        console.log(error);
                    }
                });
        }
    }

    function rmRepo(id) {
        // console.log(repositorios);
        var indexrepo = repositorios.findIndex((repo) => {
            // console.log("id parametro: " + id);
            // console.log("id repositorio: " + repo.id);
            // console.log("resultado: " + (repo.id === id));
            return repo.id === id;
        });
        repositorios.splice(indexrepo, 1);
        cdLocalStorage(false, id);

        toast.success("Repositório excluido!");
        // console.log("repositorios cortado");
        // console.log(repositorios);
        setrepositorios([...repositorios]); // forcando a state atualizar pois o repositorios.splice nao atualiza
    }

    function naoSubmit(e) {
        e.preventDefault();
        addRepo();
    }

    return carregado ? (
        <Container>
            <Painel>
                <Repos>
                    <h1>
                        <BsGithub /> Meus Repositórios
                    </h1>
                    {React.Children.toArray(
                        repositorios.map((repo) => {
                            return repo.id !== 17 ? (
                                <div>
                                    <p>
                                        <span>{repo.full_name}</span>
                                        <ContainerBt>
                                            <Link to={"repositorio/" + encodeURIComponent(repo.full_name)} state={repo}>
                                                <BtInfo>
                                                    <CgDetailsMore color="#FFF" size="8vh"></CgDetailsMore>
                                                </BtInfo>
                                            </Link>
                                            <BtRem onClick={() => rmRepo(repo.id)}>
                                                <FiTrash2 color="#FFF" size="8vh" />
                                            </BtRem>
                                        </ContainerBt>
                                    </p>
                                </div>
                            ) : (
                                ""
                            );
                        })
                    )}
                </Repos>
                <Formulario onSubmit={naoSubmit}>
                    <input ref={rRepo} type="text" placeholder="Digite o repositório"></input>
                    <BtAdd margin={"0 0 0.6vh 0"} onClick={addRepo} type="button">
                        <AiOutlinePlus color="#FFF" size="8vh" />
                    </BtAdd>
                </Formulario>
            </Painel>
        </Container>
    ) : (
        <Container>
            <Painel>
                <Imagem>
                    <h1>Carregando</h1>
                    <img alt="gif carregando" src={require("../../assets/carregando.gif")}></img>
                </Imagem>
            </Painel>
        </Container>
    );
}

export default Home;
