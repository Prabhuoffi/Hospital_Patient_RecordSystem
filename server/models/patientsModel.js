const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    ailment: {
        type: String,
        required: true,
    },
    medicine: {
        type: String,
        required: true,
    },
    lastVisit: {
        type: Date,
        required: true,
    },
    allergies: {
        type: String,
        required: true,
    },
    nextOfKin: {
        type: String,
        required: true,
    },
    nextOfKinContact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
