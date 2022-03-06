import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import projectModel from "../../../modals/project.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const projects = await projectModel.find().limit(6);

      res.status(200).send(projects);
      return;
    case "POST":
      const user = await getSession({ req });
      if (user && user.role === "admin") {
        const { name, url, image } = req.body;
        if (!name || !url || !image)
          res
            .status(400)
            .send({ error: "name, url and image must be provieded" });

        res.status(200).end();
      } else {
        res.status(401).end();
      }
      return;
    case "DELETE":
      return;
    default:
      res.status(404).end();
      return;
  }
};
