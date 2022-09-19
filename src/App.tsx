import { AuthProvider } from "./context/auth";
import GlobalStyle from "./globalStyles";
import {RoutesApp} from "./routes/index"


  function App() {
  return (
    <AuthProvider>
        <GlobalStyle></GlobalStyle>
        <RoutesApp></RoutesApp>
    </AuthProvider>
  );
}

export default App;
