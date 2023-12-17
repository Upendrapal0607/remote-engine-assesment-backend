// important import
const { Router } = require("express");
const { SkillsModel } = require("../models/developer.model");
const SkillsRoute = Router();

// all Skills get end point "/"

SkillsRoute.get("/", async (req, res) => {
  try {
    let AllSkills = await SkillsModel.find();
    res.status(200).json({ AllSkills });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// add new skills end point "/add"

SkillsRoute.post("/add", async (req, res) => {
  const skill = req.body;
  console.log({ skill });
  try {
    let checkSkill = await SkillsModel.findOne({ name: skill.name });
    console.log(checkSkill);
    if (checkSkill) {
      res.status(201).json({ message: `this skill is alraidy given` });
    } else {
      let addedSkill = new SkillsModel(skill);
      await addedSkill.save();
      res.status(200).json({
        message: "new Skill added your queue you can add in your experience",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = {
  SkillsRoute,
};
