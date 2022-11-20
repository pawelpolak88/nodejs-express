const { Router } = require("express");

// маршруты
let route = Router();

route.get("/", (req, res) => {
  res.status(200).send([{ name: "good 1" }, { name: "good 2" }]);
});

const def = (server) => {
  if (server) {
    server.use("/goods", route);
  }
};

module.exports = def;
