const fileController = require('../controllers/fileController');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/fit', upload.single('file'), (req, res) => {
  fileController.fitFileParser(req.body);
  return res.json({});
});

module.exports = router;
