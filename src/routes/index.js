import express from 'express';
import home from './home/home';

const router = express.Router();

// Home
router.get('/', home);

export default router;
