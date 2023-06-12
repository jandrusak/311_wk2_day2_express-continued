const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

let router = require("./routes/routes")(app); // Pass app instance to the routes file
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});


console.log(process.cwd())