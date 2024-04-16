import React, { useState } from "react";
import axios from "axios";

const PatientInfo = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    bloodType: "",
    ailment: "",
    medicine: "",
    lastVisit: "",
    allergies: "",
    nextOfKin: "",
    nextOfKinContact: "",
    address: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/patient/create",
        patient
      );
      console.log(response.data);
      setSuccessMessage("Patient data saved successfully.");
      setPatient({
        name: "",
        age: "",
        bloodType: "",
        ailment: "",
        medicine: "",
        lastVisit: "",
        allergies: "",
        nextOfKin: "",
        nextOfKinContact: "",
        address: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while saving patient data.");
    }
  };

  return (
    <div className="max-w-full bg-white px-5 py-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4 md:col-span-1">
            <label htmlFor="name" className="text-lg font-semibold mb-1 block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={patient.name}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Name"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label htmlFor="age" className="text-lg font-semibold mb-1 block">
              Age:
            </label>
            <input
              type="number"
              id="age"
              value={patient.age}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Age"
            />
          </div>
          {/* Add other input fields similarly */}
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="bloodType"
              className="text-lg font-semibold mb-1 block"
            >
              Blood Type:
            </label>
            <input
              type="text"
              id="bloodType"
              value={patient.bloodType}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Blood Type"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="ailment"
              className="text-lg font-semibold mb-1 block"
            >
              Ailment:
            </label>
            <input
              type="text"
              id="ailment"
              value={patient.ailment}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Ailment"
            />
          </div>
          <div className="mb-4 md:col-span-2">
            <label
              htmlFor="medicine"
              className="text-lg font-semibold mb-1 block"
            >
              Medicine:
            </label>
            <input
              type="text"
              id="medicine"
              value={patient.medicine}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Medicine"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="lastVisit"
              className="text-lg font-semibold mb-1 block"
            >
              Last Visit:
            </label>
            <input
              type="date" // Change the input type to 'date'
              id="lastVisit"
              value={patient.lastVisit}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Select Last Visit Date" // You can remove the placeholder
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="allergies"
              className="text-lg font-semibold mb-1 block"
            >
              Allergies:
            </label>
            <input
              type="text"
              id="allergies"
              value={patient.allergies}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Allergies"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="nextOfKin"
              className="text-lg font-semibold mb-1 block"
            >
              Next of Kin:
            </label>
            <input
              type="text"
              id="nextOfKin"
              value={patient.nextOfKin}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Next of Kin"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label
              htmlFor="nextOfKinContact"
              className="text-lg font-semibold mb-1 block"
            >
              Next of Kin Contact:
            </label>
            <input
              type="text"
              id="nextOfKinContact"
              value={patient.nextOfKinContact}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Next of Kin Contact"
            />
          </div>
          <div className="mb-4 md:col-span-2">
            <label
              htmlFor="address"
              className="text-lg font-semibold mb-1 block"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={patient.address}
              onChange={handleChange}
              className="mb-2 px-4 py-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the Address"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PatientInfo;
