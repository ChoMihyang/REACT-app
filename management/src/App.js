import React from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://i.pravatar.cc/200​​",
    name: "田中",
    birthday: "960101",
    gender: "男",
    job: "大学生",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/200​​",
    name: "鈴木",
    birthday: "960102",
    gender: "女",
    job: "プログラマー",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/200​​",
    name: "野口",
    birthday: "960103",
    gender: "男",
    job: "営業",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
