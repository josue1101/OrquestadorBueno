const { Router } = require("express");
const router = Router();

const { createOrderMP } = require("../controllers/payment.controller.js");

router.get("/create-order", createOrderMP);
router.get("/success-mp", (req, res) => res.send("success-mp"));
router.get("/failure", (req, res) => res.send("failure"));
router.get("/pending", (req, res) => res.send("pending"));

module.exports = router;
