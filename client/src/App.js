import * as React from 'react';
import './App.css';
import './components/main'
import MainPage from './components/main';
import MockPage from './components/mockPage'
import {Route, Switch} from 'react-router-dom';

function App () {
  return(
    <main>
    <Switch>
        <Route path="/"component={MainPage} exact/>
        <Route path="/details"component={MockPage} exact/>
    </Switch>
    </main>
  )
};


  export default App