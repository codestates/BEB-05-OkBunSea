const cors = require("cors");
const express = require("express");
const app = express();

const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
  next();
});

app.post("/query", controllers.query);
app.post("/mint", controllers.mint);
app.post("/buy", controllers.buy);
app.post("/sell", controllers.sell);

const PORT = 4001;

let server
server = app.listen(PORT, () => console.log("http server runnning"));

module.exports = server;
