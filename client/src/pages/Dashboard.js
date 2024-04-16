import React, { useState } from "react";
import PatientInfo from "../components/PatientInfo"; //
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState("AddPatient");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="flex h-screen mt-32 overflow-hidden">
      {/* Sidebar */}
      <div className="bg-blue-500 text-white w-36 md:w-64 flex flex-col">
        <div className="flex-shrink-0 bg-blue-700 p-4 flex items-center justify-between">
          <span className="text-xl  font-semibold mr-1 ">Dashboard</span>
          <Link to="/" className="text-gray-300 focus:outline-none">
            <LogoutIcon />
          </Link>
        </div>

        <nav className="flex-1  overflow-y-auto">
          <ul className="p-2">
            <li
              className={`px-3 py-2 cursor-pointer ${
                activeMenuItem === "AddPatient"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleMenuItemClick("AddPatient")}
            >
              Add Patient
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <div className="flex items-center justify-between">
            <button className="text-gray-600 focus:outline-none"></button>
            <span className="text-xl font-semibold">Dashboard</span>
            <div></div> {/* Add user profile menu or other actions */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          {/* Conditional rendering based on active menu item */}
          {activeMenuItem === "AddPatient" && (
            <div>
              <h1 className="text-3xl font-semibold mb-4">Add New Patient</h1>
              <PatientInfo />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
