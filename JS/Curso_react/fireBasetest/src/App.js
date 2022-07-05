import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import firebase from "./firebaseConnection";
import { toast } from "react-toastify";
import translate from "translate";

function App() {
    translate.engine = "google";
    translate.key = process.env.GOOGLE_KEY;

    //dentro de usestate() se passa o valor padrao desse estado
    // states da pesquisa
    const [nome, setNome] = useState();
    const [dataNasc, setDataNasc] = useState(); // eis que estados unidos mês na data vem primeiro.
    const [sexo, setSexo] = useState();
    const [salvar, setSalvar] = useState(false); // meio redundante mas nao pensei em outra forma sem usar onchange() no input
    const [pessoa, setPessoa] = useState();
    const [id, setId] = useState();

    //states da autenticacao
    const [userUID, setUserUID] = useState();

    const rnome = useRef();
    const rdatanasc = useRef();
    const rmasc = useRef();
    const rfem = useRef();
    const rid = useRef();

    const ruser = useRef();
    const rpass = useRef();

    function setStates(e) {
        e.preventDefault();

        let tempnome = rnome.current.value;
        let tempdatanasc = new Date(rdatanasc.current.value ? rdatanasc.current.value : undefined);
        tempdatanasc.setDate(tempdatanasc.getDate() + 1);
        tempdatanasc = tempdatanasc.toLocaleDateString(); // salvar assim no banco é um erro
        let tempsexo = rmasc.current.checked ? "Masculino" : rfem.current.checked ? "Feminino" : "Nao informado";

        // toast.warn("comparando: " + tempdatanasc + " igual a " + dataNasc + " resultado: " + (tempdatanasc == dataNasc));
        // eslint-disable-next-line
        if (tempnome == nome && tempdatanasc == dataNasc && tempsexo == sexo) {
            if (nome && dataNasc && sexo) {
                setSalvar(false);
                setNome(undefined);
                setDataNasc("Invalid Date");
                setSexo(undefined);
            } else {
                toast.error("Dados inválidos");
                setPessoa(undefined);
            }
        } else {
            setSalvar(true);
            setNome(tempnome);
            setDataNasc(tempdatanasc);
            setSexo(tempsexo);
        }
        //para verificar states logo após de setá-las é necessário ter algum timeout, porque esse set nunca é instantaneo por algum motivo.
        // setTimeout(() => {
        // console.log("states: " + nome + " " + dataNasc + " " + sexo);
        // }, 10);

        // console.log(
        //     "nome: " +
        //         rnome.current.value +
        //         " data de nascimento: " +
        //         rdatanasc.current.value +
        //         " masculino? " +
        //         rmasc.current.checked +
        //         " feminino? " +
        //         rfem.current.checked
        // );
    }

    function editarpessoa() {
        let dataFormat = new Date(rdatanasc.current.value);
        dataFormat.setDate(dataFormat.getDate() + 1);
        dataFormat = dataFormat.toLocaleDateString();
        if (id) {
            firebase
                .firestore()
                .collection("pessoas")
                .doc(id)
                .update({
                    nome: rnome.current.value,
                    data_nascimento: dataFormat,
                    sexo: rmasc.current.checked ? "Masculino" : rfem.current.checked ? "Feminino" : "Nao informado",
                })
                .then(() => {
                    toast.success("editado com sucesso!");
                    setPessoa({
                        id: pessoa.id,
                        nome: rnome.current.value,
                        data_nascimento: rdatanasc.current.value,
                        sexo: rmasc.current.checked ? "Masculino" : rfem.current.checked ? "Feminino" : "Nao informado",
                    });
                })
                .catch((error) => {
                    translate(error, "Portuguese").then((errotrad) => {
                        toast.error(errotrad);
                    });
                });
        } else {
            toast.error("algo deu errado");
        }
    }

    function removerpessoa() {
        if (id) {
            firebase
                .firestore()
                .collection("pessoas")
                .doc(id)
                .delete()
                .then(() => {
                    toast.success("removido com sucesso!");
                    rid.current.value = "";
                    rdatanasc.current.value = "";
                    rnome.current.value = "";
                    rmasc.current.checked = false;
                    rfem.current.checked = false;
                    setPessoa(undefined);
                    setId(undefined);
                });
        } else {
            toast.error("id nao encontrado, busque a pessoa para remover");
        }
    }

    function buscarpessoa() {
        let dataFormat = new Date(rdatanasc.current.value);
        dataFormat.setDate(dataFormat.getDate() + 1);
        dataFormat = dataFormat.toLocaleDateString();

        firebase
            .firestore()
            .collection("pessoas")
            .where("nome", "==", rnome.current.value)
            .where("data_nascimento", "==", dataFormat)
            .where("sexo", "==", rmasc.current.checked ? "Masculino" : rfem.current.checked ? "Feminino" : "Nao informado")
            .get()
            .then((result) => {
                if (!result.empty) {
                    result.forEach((doc) => {
                        toast.success("Pessoa encontrada! id: " + doc.id);
                        setId(doc.id);
                        setPessoa({ id: doc.id, nome: doc.data().nome, data_nascimento: doc.data().data_nascimento, sexo: doc.data().sexo });
                    });
                } else {
                    toast.error("Nenhuma pessoa com esses dados foi encontrada");
                }
                // if (!result.data().exists()) {
                //
                // }
            })
            .catch((error) => {
                translate(error, "Portuguese").then((errotrad) => {
                    toast.error(errotrad);
                });
            });
    }

    useEffect(() => {
        console.log("states: " + nome + " " + dataNasc + " " + sexo);
        if (salvar) {
            // eslint-disable-next-line
            if (nome && dataNasc != "Invalid Date" && (rmasc || rfem)) {
                // let cadastrado;
                // Salvar no firebase informando manualmente o documento.
                // firebase
                //     .firestore()
                //     .collection("pessoas")
                //     .doc("test")
                //     .set({
                //         nome: nome,
                //         data_nascimento: dataNasc,
                //         sexo: sexo,
                //     })
                //     .then(() => {
                //         console.log("dados cadastrados! ");
                //     })
                //     .catch((erro) => {
                //         console.log("erro: " + erro);
                //     });

                firebase
                    .firestore()
                    .collection("pessoas")
                    .where("nome", "==", nome)
                    .where("data_nascimento", "==", dataNasc)
                    .where("sexo", "==", sexo)
                    .get()
                    .then((snapshot) => {
                        if (!snapshot.empty) {
                            snapshot.forEach(() => {
                                toast.warn("Pessoa já existe no sistema");
                                setSalvar(false);
                            });
                        } else {
                            // console.log("nao encontrado");
                            // cadastrado = false;
                            firebase
                                .firestore()
                                .collection("pessoas")
                                .add({ nome: nome, data_nascimento: dataNasc, sexo: sexo })
                                .then((Ref) => {
                                    // console.log("dados cadastrados! ");

                                    toast.success("Pessoa salva com sucesso!");
                                    setId(Ref.id);
                                    setPessoa({ id: Ref.id, nome: nome, data_nascimento: dataNasc, sexo: sexo });
                                    setSalvar(false);
                                })
                                .catch((error) => {
                                    translate(error, "Portuguese").then((errotrad) => {
                                        toast.error(errotrad);
                                    });
                                    setPessoa(undefined);
                                    setSalvar(false);
                                });
                        }
                    })
                    .catch((error) => {
                        translate(error, "Portuguese").then((errotrad) => {
                            toast.error(errotrad);
                        });
                        setPessoa(undefined);
                        setSalvar(false);
                    });

                // if (cadastrado === false) {
                //     firebase
                //         .firestore()
                //         .collection("pessoas")
                //         .add({ nome: nome, data_nascimento: dataNasc, sexo: sexo })
                //         .then(() => {
                //             console.log("dados cadastrados! ");
                //         })
                //         .catch((erro) => {
                //             console.log("erro ao cadastrar: " + erro);
                //         });
                //     setSalvar(false);
                // }
            } else {
                toast.error("dados inválidos");
                setPessoa(undefined);
                setSalvar(false);
            }
        }
    }, [nome, dataNasc, sexo, salvar]);

    useEffect(() => {
        rid.current.value = id ? id : "";
    }, [id]);

    async function cadastrarUsuario() {
        if (ruser.current.value && rpass.current.value) {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(ruser.current.value, rpass.current.value)
                .then((user) => {
                    toast.success("usuario cadastrado com sucesso! " + user);
                })
                .catch((error) => {
                    translate(error, "Portuguese").then((errotrad) => {
                        toast.error(errotrad);
                    });
                });
        }
    }

    async function autenticarUsuario(op) {
        if (op === "entrar") {
            if (ruser.current.value && rpass.current.value) {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(ruser.current.value, rpass.current.value)
                    .then((user) => {
                        toast.success("usuario Autenticado com sucesso! ");
                        setUserUID(user.user.uid);
                    })
                    .catch((error) => {
                        translate(error, "Portuguese").then((errotrad) => {
                            toast.error(errotrad);
                        });
                    });
            } else {
                toast.error("Email ou senha vazios!");
            }
        }
        if (op === "sair") {
            setUserUID(undefined);
            setPessoa(undefined);
            toast.success("Logout realizado com sucesso");
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <form className="inputs">
                    <p>{userUID ? "Logado com id " + userUID : "Login"}</p>
                    <div className={userUID ? "hidden" : ""}>
                        <label>Email</label>
                        <input ref={ruser} type="email"></input>
                        <label>Senha</label>
                        <input ref={rpass} type="password"></input>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            autenticarUsuario(userUID ? "sair" : "entrar");
                        }}
                        id={userUID ? "btexcluir" : "btenviar"}
                        className="bt"
                    >
                        {userUID ? "Sair" : "Logar"}
                    </button>
                    <button type="button" onClick={cadastrarUsuario} id="btlistar" className={userUID ? "hidden" : "bt"}>
                        Cadastrar
                    </button>
                </form>

                <form onSubmit={setStates} className={userUID ? "inputs" : "inputs hidden"}>
                    <p>Firebase</p>
                    <label>id</label>
                    <input ref={rid} type="text"></input>
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
                        <button type="submit" id="btenviar" className=" bt">
                            Enviar
                        </button>
                        <button type="button" onClick={editarpessoa} id="bteditar" className="bt">
                            Editar
                        </button>
                        <button type="button" onClick={removerpessoa} id="btremover" className="bt">
                            Remover
                        </button>
                        <button type="button" onClick={buscarpessoa} id="btlistar" className="bt">
                            Buscar
                        </button>
                    </div>
                </form>
            </header>

            <div className="result">
                {pessoa ? (
                    <div>
                        <p>ID: {pessoa.id}</p>
                        <p>Nome: {pessoa.nome}</p>
                        <p>Data nascimento: {pessoa.data_nascimento}</p>
                        <p>Sexo: {pessoa.sexo}</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default App;
