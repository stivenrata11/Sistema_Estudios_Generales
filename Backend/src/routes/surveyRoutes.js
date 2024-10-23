const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// Rutas para encuestas
router.get('/', surveyController.getAllSurveys);
router.post('/', surveyController.createSurvey);
router.get('/:id', surveyController.getSurveyById);

module.exports = router;