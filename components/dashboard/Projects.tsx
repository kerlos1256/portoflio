import { IconButton, Switch } from "@mui/material";
import axios from "axios";
import React, { FC } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FilteredProjectsState,
  ProjectsState,
} from "../../state/recoil/projects";
import ProjectCard from "../partails/ProjectCard";
import { ProjectType } from "../home/Work";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#85D1D6",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#fff",
  },
}));

const Projects: FC = () => {
  const projects = useRecoilValue(FilteredProjectsState);
  const setProjects = useSetRecoilState(ProjectsState);

  const updateProject = async (project: ProjectType) => {
    const res = await axios("http://localhost:3000/api/projects/update", {
      method: "POST",
      data: project,
    });
    console.log("rpoject", project);
    console.log(res);
  };

  const handleDelete = async (id: string) => {
    const res = await axios("http://localhost:3000/api/projects", {
      method: "DELETE",
      params: { id },
    });
    if (res.status == 200) {
      setProjects((state) => {
        const projectIndex = state.findIndex((project) => project._id === id);

        return [
          ...state.slice(0, projectIndex),
          ...state.slice(projectIndex + 1),
        ];
      });
    }
  };

  const handleChange = (checked: boolean, id: string) => {
    setProjects((state) => {
      const projectIndex = state.findIndex((project) => project._id === id);
      const project = state[projectIndex];
      const updatedProject = { ...project, visiable: checked };
      updateProject(updatedProject);
      return [
        ...state.slice(0, projectIndex),
        updatedProject,
        ...state.slice(projectIndex + 1),
      ];
    });
  };

  return (
    <div className="flex gap-4 p-8 flex-wrap">
      {projects.map((project, i) => (
        <div
          className="rounded-xl bg-borderGrey flex flex-col gap-4 overflow-hidden"
          key={project._id}
        >
          <ProjectCard card={project} />
          <div className="flex gap-4">
            <IconButton onClick={() => handleDelete(project._id)}>
              <DeleteIcon className="text-[#933]" />
            </IconButton>
            <FormControlLabel
              checked={project.visiable}
              onChange={(e, checked) => handleChange(checked, project._id)}
              control={<StyledSwitch />}
              label="visiable"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
