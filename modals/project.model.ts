import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  url: String,
  image: String,
});

export default models.projects || model("projects", ProjectSchema);
