const express = require('express');
const router = express.Router();

router.post('/fit', (req, res) => {
  return res.sendStatus(501);
});

module.exports = router;
