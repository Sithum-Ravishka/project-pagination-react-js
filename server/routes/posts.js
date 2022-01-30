import express from 'express';

import { getPosts, getPostsBySearch, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

export default router;