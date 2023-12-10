import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell } from "@mui/material";

// 한 명의 고객에 대한 정보를 출력
// 一人の顧客についての情報を出力
function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt="profile" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
}

Customer.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
export default Customer;
