import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import RoutesApp from "./Routes/routes";
import firebase from "./services/firebaseConnection";

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <GlobalStyle />
            <RoutesApp />
        </>
    );
}

export default App;
