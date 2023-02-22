const getReq = (req, res) => {
  res.status(200).send([
    { id: 1, caption: "user 1" },
    { id: 2, caption: "user 2" },
  ]);
};

module.exports = (route) => {
  if (route) {
    route.get("/", getReq);
  }
};
