// 고객 추가 페이지
// 顧客登録ページ
import React, { useState } from "react";
// import { post } from "axios";

function CustomerAdd() {
  const [customers, setCustomers] = useState([]);
  const [values, setValues] = useState({
    file: null,
    fileName: "",
    userName: "",
    birthday: "",
    gender: "",
    job: "",
  });

  const handlevalueChange = (event) => {
    console.log(event.target.value);
    // TODO: 入力された複数の値をsetValuesに保存する
    setValues(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (setCustomers === "") {
      return;
    }
    setCustomers((currentArray) => [values, ...currentArray]);
  };
  console.log(customers);
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>顧客登録ページ</h1>
      プロフィール写真：{" "}
      <input
        type="file"
        name="file"
        file={values.file}
        value={values.fileName}
        onChange={handlevalueChange}
      ></input>
      <br />
      氏名：
      <input
        type="text"
        name="userName"
        value={values.userName}
        onChange={handlevalueChange}
      ></input>
      <br />
      生年月日：
      <input
        type="text"
        name="birthday"
        value={values.birthday}
        onChange={handlevalueChange}
      ></input>
      <br />
      性別：{" "}
      <input
        type="text"
        name="gender"
        value={values.gender}
        onChange={handlevalueChange}
      ></input>
      <br />
      職業：
      <input
        type="text"
        name="job"
        value={values.job}
        onChange={handlevalueChange}
      ></input>
      <br />
      <button>登録する</button>
    </form>
  );
}

export default CustomerAdd;
