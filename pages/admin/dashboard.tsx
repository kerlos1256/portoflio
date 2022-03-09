import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import AddProject from "../../components/dashboard/AddProject";
import Filter from "../../components/dashboard/Filter";
import Projects from "../../components/dashboard/Projects";
import { ProjectType } from "../../components/home/Work";
import { ProjectsState } from "../../state/recoil/projects";

const Dashboard: NextPage = () => {
  const setProjects = useSetRecoilState(ProjectsState);
  useEffect(() => {
    async function getProjects() {
      const { data }: { data: ProjectType[] } = await axios(
        "http://localhost:3000/api/projects/all"
      );
      setProjects(data);
    }
    getProjects();
  }, []);
  return (
    <main>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AddProject />
      <Filter />
      <Projects />
    </main>
  );
};
export default Dashboard;
