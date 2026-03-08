import express from 'express';
import { getCurrentAffairs, createCurrentAffair } from '../controllers/currentAffairsController.js';

const router = express.Router();

router.route('/')
    .get(getCurrentAffairs)
    .post(createCurrentAffair);

export default router;
