import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// You can import more pages here when ready

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Add more routes here later */}
    </Routes>
  );
}
// This file sets up the main routing for the application.