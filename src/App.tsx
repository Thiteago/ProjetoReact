import { AuthProvider } from "./context/auth";
import GlobalStyle from "./globalStyles";
import {RoutesApp} from "./routes/index"
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
const engine = new Styletron();



  function App() {
  return (
    <AuthProvider>
        <StyletronProvider value={engine}>
          <GlobalStyle></GlobalStyle>
          <RoutesApp></RoutesApp>
        </StyletronProvider>
    </AuthProvider>
  );
}

export default App;
