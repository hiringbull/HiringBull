import express from 'express';

import { requireAuth, requirePayment } from '../middlewares/auth.js';
import { getAllCompanies } from '../controllers/companyController.js';

import validate from '../middlewares/validate.js';
import * as companyValidation from '../validations/companyValidation.js';

const router = express.Router();

// Protected routes (require valid subscription)
router.get('/', requireAuth, requirePayment, validate(companyValidation.getCompanies), getAllCompanies);

export default router;
