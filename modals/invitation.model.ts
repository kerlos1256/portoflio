import { model, models, Schema } from "mongoose";

const invitationSchema = new Schema({
  to: String,
  from: String,
  code: String,
});

export default models.invitations || model("invitations", invitationSchema);
