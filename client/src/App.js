import React from 'react';
import './App.css';
import './components/main'
import Home from './components/main';
import Details from './components/details'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
    <Route path="/" exact>
            <Home/>
    </Route>
    <Route path="/details" exact>
        <Details/>
    </Route>
    </Switch>
  </Router>
);


  export default App