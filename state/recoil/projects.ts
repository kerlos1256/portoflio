import { atom, selector } from "recoil";
import { ProjectType } from "../../components/home/Work";

export const ProjectsState = atom<ProjectType[]>({
  key: "ProjectsState",
  default: [],
});

export const projectsFilterState = atom<"all" | "visiable" | "hidden">({
  key: "projectsFilterState",
  default: "all",
});

export const FilteredProjectsState = selector({
  key: "FilteredProjectsState",
  get: ({ get }) => {
    const projects = get(ProjectsState);
    const filter = get(projectsFilterState);
    switch (filter) {
      case "hidden":
        return projects.filter((project) => !project.visiable);
      case "visiable":
        return projects.filter((project) => project.visiable);
      default:
        return projects;
    }
  },
});
