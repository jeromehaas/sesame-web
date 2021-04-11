const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const router = require('./router.js');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on port ${PORT}...`);
});
