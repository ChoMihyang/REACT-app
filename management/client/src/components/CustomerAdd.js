// 고객 추가 페이지
// 顧客登録ページ
// import React, { useState } from "react";

import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:4000" });

function CustomerAdd() {
  //                  const event
  // const submitHandler = (event) => {
//                    const { target }
  // const submitHandler = ({ target }) => {
  const submitHandler = (event) => {
    const {
      target: [
        { value: email },
        { value: name },
        { value: birthday },
        { value: gender },
        { value: job },
      ],
    } = event;
    event.preventDefault();
    
    const body = {
      email,
      name,
      birthday,
      gender,
      job,
      image: `https://picsum.photos/64?grayscale`,
    };

    console.log(axios);
    instance
      .post("/register", body)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <br />
      <h1>顧客登録ページ</h1>
      email:
      <input type="email" name="email"></input>
      <br />
      氏名:
      <input type="text" name="userName"></input>
      <br />
      生年月日:
      <input type="text" name="birthday"></input>
      <br />
      性別: <input type="text" name="gender"></input>
      <br />
      職業:
      <input type="text" name="job"></input>
      <br />
      プロフィール写真: <input type="file" name="image"></input>
      <br />
      <button>登録する</button>
    </form>
  );
}

export default CustomerAdd;
