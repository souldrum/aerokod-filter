import { useAppRouter } from "@/hooks/useAppRouter";
import { Project } from "@/services/roomService.types";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

export const ProjectFilter: React.FC<{
  projects: Project[];
}> = ({ projects }) => {
  const { setQuery } = useAppRouter();
  const searchParams = useSearchParams();
  const params = searchParams.get("project");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery("project", e.target.value);
  };

  return (
    <FilterWithTitle title="Проект">
      <div className="relative flex items-center t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <select
          className="outline-none w-full appearance-none cursor-pointer"
          name="project"
          id="project"
          value={params ? params : 0}
          onChange={handleChange}
        >
          <option value={0} disabled>
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
