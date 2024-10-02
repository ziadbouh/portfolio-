import express from 'express';
import mainController from './mainController.js';
const router = express.Router();


// Route paramétrée pour obtenir un item par ID
router.get('/', mainController.home);

export default router ;