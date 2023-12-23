// Node.js의 진입점이 되는 파일
// Node.jsの入口になるファイル

// expressモジュールをインポートしてExpressアプリケーションを作成する
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Customer } = require("./models/Customer");

const app = express(); // Expressオブジェクト作成
const port = 4000;
const cors = require("cors");
dotenv.config();
const db = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("연결 완료");
  })
  .catch((error) => console.log(error));

// あるルートにアクセスされた際に表示する処理（res）を指定する
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/register", async (req, res) => {
  const newCustomer = new Customer({
    email: req.body.email,
    name: req.body.name,
    birthday: req.body.birthday,
    gender: req.body.gender,
    job: req.body.job,
  });
  const customer = await newCustomer.save();
  return res.status(201).json({
    msg: "성공",
    customer,
  });
});

// 指定したポートにアクセスする
app.listen(port, () => {
  console.log(`${port}ポートで実行されました。`);
});
