import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { projectsFilterState } from "../../state/recoil/projects";

const Filter: FC = () => {
  const [filter, setFilter] = useRecoilState(projectsFilterState);
  return (
    <div className="">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          sx={{
            color: "#fff",
            "&.Mui-focused": {
              color: "#85D1D6",
            },
          }}
        >
          Visiablity
        </InputLabel>

        <Select
          className="text-white "
          value={filter}
          label="filter"
          sx={{
            svg: { color: "#fff" },
            ":hover:not(.Mui-disabled):before": {
              borderBottomColor: "#fff",
            },
            ":before": {
              borderBottomColor: "#fff",
            },
            ":after": {
              borderBottomColor: "#85D1D6",
            },
          }}
          variant="standard"
          onChange={(e) => {
            const v = e.target.value;
            if (v === "all" || v === "visiable" || v === "hidden") {
              setFilter(v);
            }
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"visiable"}>Visiable</MenuItem>
          <MenuItem value={"hidden"}>Hidden</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
