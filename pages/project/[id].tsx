import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { ProjectType } from "../../components/home/Work";
import connectDB from "../../lib/MongoDB";
import projectModel from "../../modals/project.model";

const project: NextPage<{ project: ProjectType; error: string }> = ({
  project,
  error,
}) => {
  return (
    <div className="py-40">
      {error ? JSON.stringify(error) : JSON.stringify(project)}
    </div>
  );
};

export default project;

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const data = await connectDB(async () => {
      return await projectModel.findOne({ _id: ctx.params?.id });
    })();
    const project = () => {
      if (data.visiable) {
        return { project: JSON.parse(JSON.stringify(data)) };
      } else {
        return { error: "this content is hidden" };
      }
    };
    return {
      props: project(),
    };
  } catch (error) {
    console.log(error);
    return {
      props: { error: "error" },
    };
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const projects = await connectDB(async () => {
      return await projectModel.find();
    })();

    const paths = projects.map((project: any) => ({
      params: { id: project.id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false,
    };
  }
};
