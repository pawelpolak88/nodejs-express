const { Router } = require("express");

// маршруты
let route = Router();

route.get("/", (req, res) => {
  res.status(200).send("200 path");
});

route.post("/", (req, res) => {
  console.log(req);
  res.status(200).send(req.body);
});

const def = (server) => {
  if (server) {
    server.use("/test", route);
  }
};

module.exports = def;
