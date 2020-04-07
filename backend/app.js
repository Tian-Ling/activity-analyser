const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public/dist'));
app.use(require('./routes/base.js'));

app.listen(port, () =>
  console.log(`Activity Analyser Backend listening at http://localhost:${port}`)
);
