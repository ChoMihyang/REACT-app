import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";

function App() {
  console.log("dd");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/add" element={<CustomerAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
