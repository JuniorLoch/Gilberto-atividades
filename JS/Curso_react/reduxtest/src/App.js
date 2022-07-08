import Cabecalho from "./components/Cabecalho/Cabecalho";
import RoutesApp from "./routes";
import { GlobalStyle } from "./Styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <Cabecalho />
            <RoutesApp />
        </>
    );
}

export default App;
