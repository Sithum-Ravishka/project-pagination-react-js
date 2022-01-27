import "./App.scss";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieDetails />} />>
      </Routes>
    </Router>
  );
};

export default App;