import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topnav from "./components/Topnav";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Record from "./pages/Record";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/record" element={<Record />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
