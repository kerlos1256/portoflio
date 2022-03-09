import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  url: String,
  image: String,
  description: String,
  devStack: [
    {
      category: String,
      name: String,
      icon: String,
    },
  ],
  visiable: Boolean,
});

export default models.projects || model("projects", ProjectSchema);
