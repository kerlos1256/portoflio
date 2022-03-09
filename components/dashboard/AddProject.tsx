import { Button } from "@mui/material";
import axios from "axios";
import React, { FC, useState } from "react";
import Input from "../partails/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { ProjectType } from "../home/Work";
import { useSetRecoilState } from "recoil";
import { ProjectsState } from "../../state/recoil/projects";

interface InputType {
  name: string;
  image: string;
}

const AddProject: FC = () => {
  const setProject = useSetRecoilState(ProjectsState);
  const [adding, setAdding] = useState<boolean>(false);
  const [{ image, name }, setInput] = useState<InputType>({
    image: "",
    name: "",
  });
  const handleSubmit = async () => {
    setAdding(true);
    const { data }: { data: ProjectType } = await axios(
      "http://localhost:3000/api/projects",
      {
        method: "POST",
        data: {
          image,
          name,
        },
      }
    );
    console.log(data);
    setProject((state) => [...state, { ...data }]);
    setAdding(false);
  };
  return (
    <div className="pt-64 flex flex-col gap-8 items-center">
      <Input
        name="name"
        label="Name"
        autoComplete="off"
        onChange={(e) =>
          setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
        }
        empty={name.length < 1}
      />
      <Input
        name="image"
        autoComplete="off"
        label="Image Url"
        onChange={(e) =>
          setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
        }
        empty={image.length < 1}
      />
      <LoadingButton
        sx={{
          fontWeight: 500,
          paddingX: "4rem",
          backgroundColor: "#85D1D6",
          ":hover": {
            backgroundColor: "#85D1D6",
            fontWeight: 500,
            color: "#282C34",
          },
        }}
        variant="contained"
        onClick={handleSubmit}
        loading={adding}
      >
        Add
      </LoadingButton>
    </div>
  );
};

export default AddProject;
