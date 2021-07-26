import {HashRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home"
import { Produtos } from './pages/Produtos';

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Produtos/" component={Produtos}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
