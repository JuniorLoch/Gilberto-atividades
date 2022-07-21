import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";
import RoutesApp from "./Routes/routes";
import AuthProvider from "./contexts/auth";

function App() {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;
