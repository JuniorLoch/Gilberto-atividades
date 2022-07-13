import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiLXWty6vDRg_W3OrVoqHhwQyTW1DF3Tk",
    authDomain: "curso-react-8efa5.firebaseapp.com",
    projectId: "curso-react-8efa5",
    storageBucket: "curso-react-8efa5.appspot.com",
    messagingSenderId: "996702065407",
    appId: "1:996702065407:web:5c34358323319cc12132ca",
    measurementId: "G-LEMMQ15B3V",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
