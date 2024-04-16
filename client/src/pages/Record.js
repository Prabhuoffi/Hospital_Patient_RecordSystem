import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, endpoints } from "../apiUtils";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${endpoints.getPatients}`);
        const modifiedPatients = response.data.data.map((patient) => ({
          ...patient,
          lastVisit: patient.lastVisit.slice(0, 10), // Extracting only the date part (YYYY-MM-DD)
        }));
        setPatients(modifiedPatients);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}${endpoints.searchPatients(searchTerm)}`
      );
      setPatients(response.data.data);
    } catch (error) {
      console.error("Error searching patients:", error);
    }
  };

  return (
    <div className="container mx-auto mt-32 md:mt-32">
      <h1 className="text-2xl font-bold mb-4">Patient Records</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-400 p-2 mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left border-r border-gray-400">
                Name
              </th>
              <th className="py-3 px-6 border-r border-gray-400">Age</th>
              <th className="py-3 px-6 border-r border-gray-400">Blood Type</th>
              <th className="py-3 px-6 border-r border-gray-400">Ailment</th>
              <th className="py-3 px-6 border-r border-gray-400">Medicine</th>
              <th className="py-3 px-6 border-r border-gray-400">Last Visit</th>
              <th className="py-3 px-6 border-r border-gray-400">Allergies</th>
              <th className="py-3 px-6 border-r border-gray-400">
                Next of Kin
              </th>
              <th className="py-3 px-6 border-r border-gray-400">
                Next of Kin Contact
              </th>
              <th className="py-3 px-6">Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.name}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.age}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.bloodType}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.ailment}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.medicine}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.lastVisit}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.allergies}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.nextOfKin}
                </td>
                <td className="py-4 px-6 border-r border-gray-400">
                  {patient.nextOfKinContact}
                </td>
                <td className="py-4 px-6">{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
