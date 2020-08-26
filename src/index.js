const express = require("express");
const app = express();

const routes = require("./router");

app.use(express.json());

app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
  console.log("Server Runing");
});
