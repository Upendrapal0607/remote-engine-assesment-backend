// all impotant import 
const express = require("express");
const { connection } = require("./db/db");
const cors = require("cors");
const { DeveloperRoute } = require("./routes/Developer.route");
const { RegisterRout } = require("./routes/Register.Route");
const { SkillsRoute } = require("./routes/Skiils.Route");

require("dotenv").config();
// what should be app can use base on requirment 
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/developer", DeveloperRoute);
app.use("/user", RegisterRout);
app.use("/skills", SkillsRoute);

// simple welcome route end point 

app.get("/", (req, res) => {
  res.send("welcome to back-end let's start");
});

// server and data base connection 

app.listen(port, async () => {
  console.log(`Server is running on port 8080`);
  try {
    await connection;
    console.log("connected to the database");
  } catch (error) {
    console.log({ error });
  }
});
