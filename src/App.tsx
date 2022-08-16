import {HashRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home"
import { MandeSuaIdeia } from './pages/MandeSuaIdeia';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { Login } from './pages/Login';
import { Venda } from './pages/Venda';
import { Register } from './pages/Register'

  function App() {
  return (
    <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Produtos" component={Produtos}/>
                <Route path="/MandeSuaIdeia" component={MandeSuaIdeia}/>
                <Route path="/Sobre" component={Sobre}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Registro" component={Register}/>
                <Route path="/Venda" component={Venda}/>
            </Switch>
    </HashRouter>
  );
}

export default App;
