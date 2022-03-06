import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: String,
  password: String,
  role: String,
});

export default models.users || model("users", UserSchema);
