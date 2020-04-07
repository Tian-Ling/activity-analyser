const express = require('express');
const router = express.Router();

router.use('/api', require('./file.js'));

router.all('*', (req, res) => {
  res.sendFile(process.cwd() + '/public/dist/index.html');
});

module.exports = router;
