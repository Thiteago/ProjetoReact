import { AuthProvider } from "./context/auth";
import {RoutesApp} from "./routes/index"


  function App() {
  return (
    <AuthProvider>
        <RoutesApp></RoutesApp>
    </AuthProvider>
  );
}

export default App;
