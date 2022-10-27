const express = require("express");
const { Router } = require("express");

const server = express();

// расшифровывать русский тескт в url
server.use(express.urlencoded({ extended: true }));

// помещаем параметры в body
server.use(express.json());

// логи для сервера
// server.use((req, res, next) => {
//   req.body;
//   res.status(265).send("Hello world!");
// });

// маршруты
let route = Router();
route.get("/", (req, res) => {
  res.status(200).send("200 path");
});

route.post("/", (req, res) => {
  res.status(200).send(req.body);
});

server.use("/test", route);

server.listen(2364);
