import RoutesApp from "./routes";

import { GlobalStyle } from "./Styles/global";
import { Provider } from "react-redux";
import store from "./store/redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
