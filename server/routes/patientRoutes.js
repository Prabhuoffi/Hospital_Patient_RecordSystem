const express = require('express');
const router = express.Router();
const { createPatient, getAllPatients, searchPatientsByName } = require('../controllers/patientController');

// Route to create a new patient
router.post('/create', createPatient);

// Route to get all patients
router.get('/read', getAllPatients);

// Route to search patients by name
router.get('/search', searchPatientsByName);

module.exports = router;
