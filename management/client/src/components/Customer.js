import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
// import PropTypes from "prop-types";

// 한 명의 고객에 대한 정보를 출력
// 一人の顧客についての情報を出力
function Customer() {
  return (
    <div>
      <h1>Customer List</h1>
      <Button variant="contained" component={Link} to="/add">Add Customer</Button>
    </div>
  );
}

export default Customer;
