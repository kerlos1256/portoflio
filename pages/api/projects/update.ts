import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectDB from "../../../lib/MongoDB";
import projectModel from "../../../modals/project.model";

export default connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        const session = await getSession({ req });
        if (!session?.user || session?.user.role !== "admin")
          return res.status(401).end();

        const { _id, ...rest } = req.body;

        await projectModel.updateOne({ _id }, rest);

        res.status(200).end();
        res.unstable_revalidate("/");
      } catch (error) {
        res.status(500).send(error);
      }
      return;
    default:
      return res.status(404).end();
  }
});
