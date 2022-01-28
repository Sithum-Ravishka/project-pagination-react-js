import "./App.scss";
import MovieDetails from './components/movieDetails/MovieDetails';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" exact component={() => <Navigate  to="/movies" />} />
          <Route path="/movies" exact component={Home} />
          <Route path="/movies/search" exact component={Home} />
          <Route path="/movies/:id" exact component={MovieDetails} />
      </Routes>
    </Router>
  );
};

export default App;