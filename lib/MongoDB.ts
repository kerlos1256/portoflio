import mongoose from "mongoose";

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  if (!process.env.MONGODB_URI) return;
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
  return handler(req, res);
};

export default connectDB;
