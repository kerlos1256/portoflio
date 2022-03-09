import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectDB from "../../../lib/MongoDB";
import projectModel from "../../../modals/project.model";

const projects = connectDB(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    switch (req.method) {
      case "GET":
        const projects = await projectModel.find({ visiable: true }).limit(6);

        res.status(200).send(projects);
        return;
      case "POST":
        try {
          if (!session?.user && session?.user?.role !== "admin")
            return res.status(401).end();

          const { name, url, image } = req.body;

          if (!name || !image) {
            return res
              .status(400)
              .send({ error: "name, url and image must be provieded" });
          }
          const newProject = await projectModel.create({
            name,
            image,
            url: url || "",
            visiable: true,
          });
          res.status(200).send(newProject);
          return;
        } catch (error) {
          return res.status(500).send(error);
        }
      case "DELETE":
        try {
          if (!session?.user && session?.user?.role !== "admin")
            return res.status(401).end();

          const { id } = req.query;
          if (!id)
            return res
              .status(400)
              .send({ error: "id query parameter moust be provided" });

          await projectModel.deleteOne({ _id: id });
          res.status(200).end();
          return;
        } catch (error) {
          return res.status(500).send(error);
        }
      default:
        res.status(404).end();
        return;
    }
  }
);
export default projects;
