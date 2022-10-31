const express = require("express");
const routerTest = require("./routes/test");

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

if (typeof routerTest === "function") {
  routerTest(server);
} else {
  console.log("Error load module routerTest: " + typeof routerTest);
}

server.listen(2364);
