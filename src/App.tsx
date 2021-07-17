import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home"

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
