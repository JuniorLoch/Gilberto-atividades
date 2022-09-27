import React, { useState, useEffect, createContext } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState();
    const [autenticando, setAutenticando] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        const storageUsuario = JSON.parse(localStorage.getItem("@GChamadosUser"));

        if (storageUsuario) {
            setUsuario(storageUsuario);
        }

        setCarregando(false);
    }, []);

    async function cadastrarUsuario(email, senha) {
        setAutenticando(true);
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(async (response) => {
                await firebase
                    .firestore()
                    .collection("usuarios")
                    .doc(response.user.uid)
                    .set({ nome: null, avatar: null })
                    .then(() => {
                        let dadosUsuario = { uid: response.user.uid, nome: null, email: response.user.email, avatar: null };
                        setUsuario(dadosUsuario);
                        storageSalvarUsuario(dadosUsuario, true);
                        setAutenticando(false);
                    })
                    .catch((error) => {
                        console.log("Erro ao salvar usuario firestore: " + error);
                        setMsgErro(error);
                        setAutenticando(false);
                    });
            })
            .catch((error) => {
                console.log("Erro ao registrar usuario firebase auth: " + error);
                setMsgErro(error);
                setAutenticando(false);
            });
    }

    async function logarUsuario(email, senha) {
        setAutenticando(true);
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(async (resultado) => {
                let usuarioFirebase = await firebase.firestore().collection("usuarios").doc(resultado.user.uid).get();
                let dadosUsuario = { uid: resultado.user.uid, nome: usuarioFirebase.data().nome, email: resultado.user.email, avatar: usuarioFirebase.data().avatar };
                setUsuario(dadosUsuario);
                storageSalvarUsuario(dadosUsuario, true);
                setAutenticando(false);
            })
            .catch((error) => {
                console.log("Erro ao logar usuario firebase auth: " + error);
                setMsgErro(error);
                setAutenticando(false);
                setUsuario(null);
                storageSalvarUsuario(null, false);
            });
    }

    async function deslogarUsuario() {
        await firebase.auth().signOut();
        storageSalvarUsuario(null, false);
        setUsuario(null);
    }

    function storageSalvarUsuario(dadosUsuario, operacao) {
        // operacao -> true: salvar no localstorage | false: remover do localstorage
        if (operacao) {
            localStorage.setItem("@GChamadosUser", JSON.stringify(dadosUsuario));
        } else {
            localStorage.removeItem("@GChamadosUser");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                logado: !!usuario,
                setUsuario,
                usuario,
                storageSalvarUsuario,
                carregando,
                cadastrarUsuario,
                logarUsuario,
                deslogarUsuario,
                autenticando,
                msgErro,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
