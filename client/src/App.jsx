import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/movies" />} />
          <Route path="/movies" exact component={Home} />
          <Route path="/movies/search" exact component={Home} />
          <Route path={'/tags/:name'} component={CreatorOrTag} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;