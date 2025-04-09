const express = require("express");
const router = express.Router();
const { generateLesson } = require("../controllers/aiController");

router.post("/generate-lesson", generateLesson);

module.exports = router;
