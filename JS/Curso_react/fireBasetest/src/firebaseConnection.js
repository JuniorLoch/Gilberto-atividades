import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBiLXWty6vDRg_W3OrVoqHhwQyTW1DF3Tk",
    authDomain: "curso-react-8efa5.firebaseapp.com",
    projectId: "curso-react-8efa5",
    storageBucket: "curso-react-8efa5.appspot.com",
    messagingSenderId: "996702065407",
    appId: "1:996702065407:web:152954e5ee5db1e82132ca",
    measurementId: "G-52HZ7KGMW3",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
