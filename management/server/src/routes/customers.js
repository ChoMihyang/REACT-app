// Customerについてのルーターを設定

const express = require("express");
const router = express.Router();

// router.post("/read", (req, res) => {});

router.post("/register", async (req, res, next) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// router.post("/update", (req, res) => {});

// router.post("/delect", (req, res) => {});

module.exports = router;
