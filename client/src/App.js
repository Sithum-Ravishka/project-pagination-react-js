import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/movies" />} />
          <Route path="/movies" exact component={Home} />
          <Route path="/movies/search" exact component={Home} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
