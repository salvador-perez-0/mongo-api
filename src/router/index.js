const express = require("express");
const routerSensors = require("./sensors");
const app = express();
const port = 3000;

app.get("/", routerSensors.router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
