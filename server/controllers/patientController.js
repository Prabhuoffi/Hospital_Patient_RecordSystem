const Patient = require('../models/patientsModel');

// Controller to create a new patient
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller to get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to search patients by name
const searchPatientsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const patients = await Patient.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createPatient, getAllPatients, searchPatientsByName };
