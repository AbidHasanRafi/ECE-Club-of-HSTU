const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is ECE Club of HSTU's Server!");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
