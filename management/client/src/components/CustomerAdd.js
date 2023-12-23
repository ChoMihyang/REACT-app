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

const api = axios.create({
  baseURL: "http://localhost:4000",
});

const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    birthday: "",
    gender: "male",
    job: "developer",
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
    console.log(formData);
    api
      .post("/register", formData)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="이메일"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="이름"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="생년월일"
          type="text"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl component="fieldset" margin="normal">
          <InputLabel> 성별 </InputLabel>{" "}
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="남성" />
            <FormControlLabel value="female" control={<Radio />} label="여성" />
          </RadioGroup>{" "}
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel> 직업 </InputLabel>{" "}
          <Select name="job" value={formData.job} onChange={handleChange}>
            <MenuItem value="developer"> 개발자 </MenuItem>{" "}
            <MenuItem value="designer"> 디자이너 </MenuItem>{" "}
            <MenuItem value="manager"> 매니저 </MenuItem>{" "}
          </Select>{" "}
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          추가{" "}
        </Button>{" "}
      </form>
    </div>
  );
};

export default CustomerAdd;
