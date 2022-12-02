const express = require("express");
const router = require('./routes/getData')
const app = express();

app.use(express.json());
app.use(router)
const port = process.env.PORT || 3300;

app.listen(port, (err) => {
  if (err) {
    console.log("Sever is not responding");
  } else {
    console.log(`Sever is running on http://localhost:${port}`);
  }
});
