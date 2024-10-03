import express from 'express';
import passwordController from './passwordController.js';

const router = express.Router();

router.post('/generate/password', passwordController.generatePassword)

export default router