const fs = require("fs");
const path = require("path");
const { compareString, compareStringInArray } = require("../utils/compare");
const { Router } = require("express");

const showErrorLoadingModule = (fileName, errorMessage) => {
  console.log(`🔴 not load route: ${fileName} error - "${errorMessage}"`);
};

const def = (server) => {
  let notProcessed = ["index.js"];

  let data = fs.readdirSync(__dirname).filter((item) => {
    return (
      compareString(path.extname(item), ".js") &&
      !compareStringInArray(item, notProcessed)
    );
  });

  data.forEach((file) => {
    const fileRoute = require("./" + file);
    const moduleName = path.basename(file, ".js").toLowerCase();

    if (typeof fileRoute === "function") {
      try {
        // fileRoute(server, `/${moduleName}`);
        let route = Router();

        fileRoute(route);

        server.use(`/${moduleName}`, route);

        console.log(`🟢 route: ${moduleName}`);
      } catch (error) {
        showErrorLoadingModule(file, error.message);
      }
    } else {
      showErrorLoadingModule(file, `not 'module.export' function`);
    }
  });
};

module.exports = def;
