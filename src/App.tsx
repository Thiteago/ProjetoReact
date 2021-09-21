import {HashRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home"
import { MandeSuaIdeia } from './pages/MandeSuaIdeia';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { Login } from './pages/Login';

  function App() {
  return (
    <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Produtos" component={Produtos}/>
                <Route path="/MandeSuaIdeia" component={MandeSuaIdeia}/>
                <Route path="/Sobre" component={Sobre}/>
                <Route path="/Login" component={Login}/>
            </Switch>
    </HashRouter>
  );
}

export default App;
