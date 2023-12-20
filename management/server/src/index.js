// Node.js의 진입점이 되는 파일
// Node.jsの入口になるファイル

// expressモジュールをインポートしてExpressアプリケーションを作成する
const express = require("express");
const mongoose = require("mongoose");
// Expressオブジェクト作成
const app = express();
const port = 4000;
const cors = require('cors');
const dotenv = require("dotenv");
const db = process.env.MONGO_URI;

dotenv.config();
mongoose
  .connect(db)
  .then(() => {
    console.log("연결 완료");
  })
  .catch((error) => console.log(error));
 
app.use(cors());
app.use(express.json());

// あるルートにアクセスされた際に表示する処理（res）を指定する
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
})
app.use("/customers", require("./routes/customers"));

// 指定したポートにアクセスする
app.listen(port, () => {
  console.log(`${port}ポートで実行されました。`);
});
