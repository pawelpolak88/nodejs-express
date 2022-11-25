const getReq = (req, res) => {
  res.status(200).send([
    { id: 1, caption: "user 1" },
    { id: 2, caption: "user 2" },
  ]);
};

const def = (route) => {
  if (route) {
    route.get("/", getReq);
  }
};

module.exports = def;
