import express from 'express';

import { getPosts, getPostsBySearch, getPost } from '../controllers/movies.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

export default router;