import React from "react";
import Customer from "./components/Customer";
import "./App.css";

const customer = {
  name: "田中",
  birthday: "961222",
  gender: "男",
  gob: "大学生",
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.gob}
    />
  );
}

export default App;
