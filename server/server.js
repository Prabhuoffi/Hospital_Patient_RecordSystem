// server.js
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const PatientRoutes = require("./routes/patientRoutes")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

ConnectDB.connectDatabase();
require("dotenv").config();

app.use("/user", userRoutes);
app.use("/patient",PatientRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
