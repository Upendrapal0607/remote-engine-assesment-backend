const mongoose = require("mongoose");

// skills schema 
const SkillsSchema = mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false }
);

// skills model 
const SkillsModel = mongoose.model("skills", SkillsSchema);

// developer(onboadring) schema with all required field

const DeveloperSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    skills: [
      {
        type: [String],
      },
    ],
    professional_experience: [
      {
        company_name: { type: String, required: true },
        tech_stack: String,
        skills_used: [String],
        time_period: { type: Number, default: 0, required: true },
      },
    ],
    educational_experience: [
      {
        degree_name: { type: String, required: true },
        school_name: { type: String, required: true },
        time_period: { type: Number, default: 0, required: true },
      },
    ],
  },
  { versionKey: false }
);

// deeloper (Onboarding) model 

const DeveloperModel = mongoose.model("/DeveloperData", DeveloperSchema);
module.exports = {
  SkillsModel,
  DeveloperModel,
};
