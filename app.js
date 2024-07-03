// DEPENDENCIES
const express = require("express");
const cors = require("cors")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// CONTROLLERS
const workoutsController = require("./controllers/workoutsController")

// HEALTH CHECK ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to my fitness app!")
})

// WHEN RECEIVING A REQUEST OR RESPONSE ON THE ROUTE `/workouts` WE WANT OUR APP TO USE THE `workoutsController`
app.use("/workouts", workoutsController)

module.exports = app;
