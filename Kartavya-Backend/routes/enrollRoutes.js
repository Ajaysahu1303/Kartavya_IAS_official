import express from 'express';
import { createEnrollment, getEnrollments } from '../controllers/enrollController.js';

const router = express.Router();

router.route('/')
    .post(createEnrollment)
    .get(getEnrollments);

export default router;
