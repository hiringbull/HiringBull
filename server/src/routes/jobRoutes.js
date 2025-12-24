import express from 'express';
import { requireAuth, requirePayment } from '../middlewares/auth.js';
import {
    getAllJobs,
    getJobById,
} from '../controllers/jobController.js';
import validate from '../middlewares/validate.js';
import * as jobValidation from '../validations/jobValidation.js';

const router = express.Router();

// Protected routes (require valid subscription)
router.get('/', requireAuth, requirePayment, validate(jobValidation.getJobs), getAllJobs);
router.get('/:id', requireAuth, requirePayment, validate(jobValidation.getJob), getJobById);

export default router;
