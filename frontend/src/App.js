import React from 'react';

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components';
import Landing from './pages/Landing/Landing.js';
import Registration from './pages/Registration/Registration.js';
import PickFilms from './pages/PickFilms/PickFilms.js';
import Nominations from './pages/Nominations/Nominations.js';
import GlobalStyles from './GlobalStyles';

function App() {
  return(
    <>
      <GlobalStyles/>
      <BrowserRouter basename="/films-of-shopifolx">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/registration" exact component={() => <Registration />} />
          <Route path="/pick-films" exact component={() => <PickFilms />} />
          <Route path="/nominations" exact component={() => <Nominations />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
