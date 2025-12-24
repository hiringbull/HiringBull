import express from 'express';
import { requireAuth, requirePayment } from '../middlewares/auth.js';
import {
    getAllSocialPosts,
    getSocialPostById,
} from '../controllers/socialPostController.js';
import validate from '../middlewares/validate.js';
import * as socialPostValidation from '../validations/socialPostValidation.js';

const router = express.Router();

// Protected routes (require valid subscription)
router.get('/', requireAuth, validate(socialPostValidation.getSocialPosts), getAllSocialPosts);
router.get('/:id', requireAuth, validate(socialPostValidation.getSocialPost), getSocialPostById);

export default router;
