const express = require("express");
const dymnRoutes = require("./routes/index");

const server = express();

// расшифровывать русский тескт в url
server.use(express.urlencoded({ extended: true }));

// помещаем параметры в body
server.use(express.json());

if (typeof dymnRoutes === "function") {
  dymnRoutes(server);
}

server.listen(2364);
