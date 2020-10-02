require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//instance of express
const app = express();

//connecting to database
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set("db", db);
    console.log("db is connected");
  })
  .catch((err) => console.log(err));

//json parser
app.use(express.json());

//ENDPOINTS
app.get("/api/inventory", ctrl.getInventory);
app.post("/api/inventory", ctrl.addProduct);
app.delete("/api/inventory/:id", ctrl.deleteProduct);
app.put("/api/inventory/:id", ctrl.updateProduct);

app.listen(
  SERVER_PORT,
  console.log(`server is running on port ${SERVER_PORT}`)
);
