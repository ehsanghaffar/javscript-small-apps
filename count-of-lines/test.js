const express = require("express");
const cors = require("cors");
const http = require("http");
process.env.DEBUG = "*";
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);
const singleRoutes = require("./routes/single-routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(singleRoutes);

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
