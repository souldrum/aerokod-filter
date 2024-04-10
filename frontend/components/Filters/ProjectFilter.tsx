import { Project } from "@/services/roomService.types";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setProject } from "@/redux/slices/FiltersSlice";
import { getProjectSelector } from "@/redux/selectors/FiltersSelectors";

export const ProjectFilter: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  const project = useAppSelector(getProjectSelector);
  const dispatch = useAppDispatch();

  return (
    <FilterWithTitle title="Проект">
      <div className="relative flex items-center t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <select
          className="outline-none w-full appearance-none cursor-pointer"
          name="project"
          id="project"
          value={project}
          onChange={(e) => dispatch(setProject(Number(e.target.value)))}
        >
          <option value={undefined} disabled>
            Все
          </option>
          {projects.map((p) => (
            <option key={p.id} value={p.id} disabled={p.disabled}>
              {p.title}
            </option>
          ))}
        </select>
        <Caret className="absolute right-6 lg:right-5 pointer-events-none" />
      </div>
    </FilterWithTitle>
  );
};

const Caret: React.FC<React.SVGProps<SVGSVGElement>> = ({
  stroke = "#040306",
  width = 11,
  height = 7,
  className,
}) => {
  return (
    <svg
      className={className ? className : ""}
      width={width}
      height={height}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5.5 5.5L10 1" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
};
