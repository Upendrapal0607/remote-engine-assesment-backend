// important import
const { Router } = require("express");
const bcrypt = require("bcrypt");
const { DeveloperModel } = require("../models/developer.model");
const DeveloperRoute = Router();

// All developer get end point "/"

DeveloperRoute.get("/", async (req, res) => {
  try {
    let allDeveloperData = await DeveloperModel.find();
    res.status(201).json({ allDeveloperData });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// new developer apply end point "/add"

DeveloperRoute.post("/add", async (req, res) => {
  const resUser = req.body;
  console.log({ resUser });
  try {
    const AlraidyExitstDeveloper = await DeveloperModel.findOne({
      email: resUser.email,
    });
    if (AlraidyExitstDeveloper) {
      res.status(200).json({
        message: `user whose email ${resUser.email} is alraiday resistered`,
      });
    } else {
      console.log("hello");
      const developerData = new DeveloperModel(resUser);
      await developerData.save();
      res.status(200).send({
        message: `your details has been accepted we will get back to you soon`,
      });
    }
  } catch (error) {
    res.status(200).json({ message: "error" });
  }
});

module.exports = {
  DeveloperRoute,
};
