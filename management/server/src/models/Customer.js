// Customer Schema

const { default: mongoose } = require("mongoose");

const customerSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: String,
  birthday: Number,
  gender: String,
  job: String,
  image: String,
});

const Customer = mongoose.model("Customer", customerSchema);

// 외부에서 Customer 스키마를 사용(CRUD)할 수 있게 함
module.exports = { Customer };
