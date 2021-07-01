import React from 'react';
import Home from './components/pages/Home';
import SobrePage from './components/pages/Sobre';
import CursosPage from './components/pages/Cursos';
import ContatoPage from './components/pages/Contato';
import DespaPage from './components/pages/Despachante';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact> <Redirect to="/Home" /> </Route>
          <Route path='/home' exact component={Home} />
          <Route path='/sobre' exact component={SobrePage} />
          <Route path='/cursos' exact component={CursosPage} />
          <Route path='/contato' exact component={ContatoPage} />
          <Route path='/despachante' exact component={DespaPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
