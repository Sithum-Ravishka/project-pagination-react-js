const { getMovies, getMovie, getMoviesBySearch } = require("../controllers/movies");

const router = require("express").Router();



router.get('/', getMovies)
router.get('/:id', getMovie);
router.get('/search', getMoviesBySearch);

module.exports = router;