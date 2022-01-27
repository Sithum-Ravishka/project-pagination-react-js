const router = require("express").Router();
const Movie = require("../models/Movie");


router.getMovies = async (req, res) => {
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(req.query.page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Movie.countDocuments({});
        const movies = await Movie.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: movies, currentPage: Number(req.query.page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

//GET_Movie

router.getMovie =  async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

router.getMoviesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const movies = await Movie.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: movies });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

module.exports = router;