import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectDB from "../../../lib/MongoDB";
import projectModel from "../../../modals/project.model";

export default connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const session = await getSession({ req });

        if (session?.user && session?.user.role === "admin") {
          const projects = await projectModel.find().limit(6);

          res.status(200).send(projects);
        } else {
          res.status(401).end();
        }
      } catch (error) {
        res.status(500).send(error);
      }
      return;
    default:
      res.status(404).end();
      return;
  }
});
