// 고객 추가 페이지
// 顧客登録ページ
import React, { useState } from "react";
import {axios, post} from "axios";
import { Button } from "@mui/material";
import {
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


// const instance = axios.create({ baseURL: "http://localhost:4000/customers" });

function CustomerAdd() {
  //                  const event
  // const submitHandler = (event) => {
  //                    const { target }
  // const submitHandler = ({ target }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const {
      target: [
        { value: email },
        { value: name },
        { value: birthday },
        { value: gender },
        { value: job },
      ],
    } = event;
    

    const body = {
      email,
      name,
      birthday,
      gender,
      job,
    };

    axios
      .post("/register", body)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  const addCustomer = () => {
    // api주소로 데이터를 전달하도록 구현
  }

  const [job, setJob] = useState("");
  const handleChange = (event) => {
    setJob(event.target.value);
  };
  return (
    <div>
      <h1>Add Customer</h1>
      <form onSubmit={submitHandler}>
        <TextField
          id="email-input"
          label="email"
          type="email"
          variant="standard"
        />
        <br />
        <TextField
          id="name-input"
          label="name"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          id="birthday-input"
          label="birthday"
          type="text"
          variant="standard"
        />
        <br />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 185 }}>
          <InputLabel id="demo-simple-select-standard-label">job</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={job}
            label="job"
            onChange={handleChange}
          >
            <MenuItem value={10}>営業関連職</MenuItem>
            <MenuItem value={20}>管理・企画・事務関連職、専門職</MenuItem>
            <MenuItem value={30}>技術職（IT・Web・製造業）</MenuItem>
            <MenuItem value={40}>技術職（建築・土木）</MenuItem>
            <MenuItem value={50}>クリエイティブ関連職</MenuItem>
            <MenuItem value={60}>その他</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" type="submit">
          Add Customer
        </Button>
      </form>
    </div>
  );
}

export default CustomerAdd;
