const fileController = require('../controllers/fileController');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/fit', upload.single('file'), (req, res) => {
  const result = fileController.fitFileParser(req.file.buffer);
  return res.json(result);
});

module.exports = router;
