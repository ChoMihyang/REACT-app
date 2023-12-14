import React from "react";
import Customer from "./components/Customer";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import CustomerAdd from "./components/CustomerAdd";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/64?grayscale​",
    name: "田中",
    birthday: "960101",
    gender: "男",
    job: "大学生",
  },
  {
    id: 2,
    image: "https://picsum.photos/64?grayscale",
    name: "鈴木",
    birthday: "960102",
    gender: "女",
    job: "プログラマー",
  },
  {
    id: 3,
    image: "https://picsum.photos/64?grayscale​",
    name: "野口",
    birthday: "960103",
    gender: "男",
    job: "営業",
  },
];

function App() {
  return (
    <div>
      <CustomerAdd />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>画像</TableCell>
            <TableCell>氏名</TableCell>
            <TableCell>生年月日</TableCell>
            <TableCell>性別</TableCell>
            <TableCell>職務</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
