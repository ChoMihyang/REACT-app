// // 고객 추가 페이지
// // 顧客登録ページ
import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    birthday: "",
    gender: "",
    job: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 처리
    console.log("formData", formData);
    api
      .post("/register", formData)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add Customer Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ width: 500 }}
          margin="normal"
        />
        <br />
        <TextField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ width: 500 }}
          margin="normal"
        />
        <br />
        <TextField
          label="Birthday"
          type="text"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          sx={{ width: 500 }}
          margin="normal"
        />
        <br />
        <FormControl variant="standard">
          <InputLabel> Gender </InputLabel> <br />
          <br />
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="male"
              sx={{ marginRight: "100px" }}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="female"
            />
          </RadioGroup>{" "}
        </FormControl>
        <br />
        <FormControl variant="standard" sx={{ width: 500 }} margin="normal">
          <InputLabel> Job </InputLabel>{" "}
          <Select name="job" value={formData.job} onChange={handleChange}>
            <MenuItem value="Public">公共サービス職</MenuItem>
            <MenuItem value="Sales">営業関連職</MenuItem>
            <MenuItem value="Professional">
              管理・企画・事務関連職、専門職
            </MenuItem>
            <MenuItem value="Information">情報技術職</MenuItem>
            <MenuItem value="Entertainment">エンターテインメント職</MenuItem>
            <MenuItem value="Production">製造・生産職</MenuItem>
            <MenuItem value="Construction">建設職</MenuItem>
            <MenuItem value="other">その他</MenuItem>
          </Select>{" "}
        </FormControl>
        <br /><br />
        <Button type="submit" variant="contained">
          Add Customer{" "}
        </Button>{" "}
      </form><br />
      <Button variant="outlined" component={Link} to="/">
        Main Page
      </Button>
    </div>
  );
};

export default CustomerAdd;
