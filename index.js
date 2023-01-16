const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./db.js");

const employeeRoutes = require("./controllers/employee.controller");
const app = express();
// app.use(express.json())
// Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api/employees", employeeRoutes);

dbConnection()
  .then(() => {
    console.log("DB Connection Successfully");
  })
  .catch((err) => console.log("MONGODB CONNECT ERROR: ", err));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
