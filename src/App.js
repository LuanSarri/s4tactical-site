import React from 'react';
import Home from './components/pages/Home';
import SobrePage from './components/pages/Sobre';
import CursosPage from './components/pages/Cursos';
import ContatoPage from './components/pages/Contato';
import DespaPage from './components/pages/Despachante';
import Curso1Page from './components/pages/Curso1';
import Curso2Page from './components/pages/Curso2';
import Curso3Page from './components/pages/Curso3';
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
          <Route path='/curso1' exact component={Curso1Page} />
          <Route path='/curso2' exact component={Curso2Page} />
          <Route path='/curso3' exact component={Curso3Page} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
