const e = require("express");
const fs = require("fs");
const path = require("path");
const { compareString, compareStringInArray } = require("../utils/compare");

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
    const moduleName = path.basename(file, ".js");

    if (typeof fileRoute === "function") {
      console.log(`🟢 route: ${moduleName}`);
      fileRoute(server);
    } else {
      console.log(
        `🔴 not load route: ${file} because not "module.export" function `
      );
    }
  });
};

module.exports = def;
