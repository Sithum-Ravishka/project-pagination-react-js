import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MovieDetails from './components/PostDetails/MovieDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/movies" />} />
          <Route path="/movies" exact component={Home} />
          <Route path="/movies/search" exact component={Home} />
          <Route path="/movies/:id" exact component={MovieDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/movies" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
