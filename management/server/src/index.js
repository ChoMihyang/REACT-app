// Node.js의 진입점이 되는 파일
// Node.jsの入口になるファイル
const express = require("express");

// 앱 객체 생성
const app = express();
const port = 4000;

// 어느 경로를 요청하면 반환할 것을 지정
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`${port}番で実行されました。`);
});
