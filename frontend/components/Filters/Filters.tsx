"use client";

import { useFilters } from "@/hooks/useApi";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useAppSelector } from "@/hooks/useRedux";
import {
  getPriceMaxSelector,
  getPriceMinSelector,
  getProjectSelector,
  getSquareMaxSelector,
  getSquareMinSelector,
} from "@/redux/selectors/FiltersSelectors";
import { getTotalItemsSelector } from "@/redux/selectors/TotalItemsSelectors";
import { FloatingOverlay } from "@floating-ui/react";
import cn from "classnames";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import { CloseIcon } from "./CloseIcon";
import { PriceFilter } from "./PriceFilter";
import { ProjectFilter } from "./ProjectFilter";
import { ResetIcon } from "./ResetIcon";
import { RoomFilter } from "./RoomFilter";
import { SquareFilter } from "./SquareFilter";

export const Filters: React.FC<{ onVisible?: (value: boolean) => void }> = ({
  onVisible = () => {},
}) => {
  const searchParams = useSearchParams();
  const { clearQuery } = useAppRouter();

  const roomParams = searchParams.get("rooms");
  const [room, setRoom] = React.useState(
    roomParams ? Number(roomParams) : undefined
  );

  const projectParams = searchParams.get("project");
  const [project, setProject] = React.useState(
    projectParams ? Number(projectParams) : undefined
  );

  // const project = useAppSelector(getProjectSelector);
  const priceMin = useAppSelector(getPriceMinSelector);
  const priceMax = useAppSelector(getPriceMaxSelector);
  const squareMin = useAppSelector(getSquareMinSelector);
  const squareMax = useAppSelector(getSquareMaxSelector);
  const totalItems = useAppSelector(getTotalItemsSelector);

  const {
    filtersLoading,
    filtersError,
    filtersPlaceholder,
    projects,
    price,
    square,
    rooms,
  } = useFilters({
    "f[rooms][]": room,
    "f[projects][]": project,
    "f[price][min]": priceMin,
    "f[price][max]": priceMax,
    "f[square][min]": squareMin,
    "f[square][max]": squareMax,
  });

  if (filtersLoading)
    return (
      <div className="flex justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );

  if (filtersError)
    return (
      <h6 className="text-center">Ошибка загрузки {filtersError.message}</h6>
    );

  const handleReset = () => clearQuery();

  return (
    <>
      <MobileView>
        <FloatingOverlay
          className={cn(
            "fixed top-0 inset-x-0 z-10 backdrop-blur-lg backdrop-brightness-50"
          )}
          lockScroll
        >
          <div
            className={cn("bg-white p-5 pb-0 rounded-b-2xl animate-filters-in")}
          >
            <div
              className={filtersPlaceholder ? "animate-pulse opacity-15" : ""}
            >
              <CloseIcon
                className="ml-auto mb-6"
                onClick={() => onVisible(false)}
              />
              <div className="flex flex-col gap-8">
                <h4>ФИЛЬТР</h4>
                <ProjectFilter projects={projects!} onSetProject={setProject} />
                <RoomFilter rooms={rooms!} onSetRoom={setRoom} />
                <PriceFilter price={price!} />
                <SquareFilter square={square!} />
              </div>
            </div>
            <Button
              className="my-12 p-3 w-full"
              onClick={() => onVisible(false)}
            >
              Смотреть квартиры
            </Button>
          </div>
        </FloatingOverlay>
      </MobileView>

      <BrowserView>
        <div
          className={cn(
            "flex flex-col gap-12 pb-16 mb-12 border-b-2 border-black-100 border-opacity-20",
            filtersPlaceholder && "animate-pulse opacity-15"
          )}
        >
          <div className="flex gap-3 justify-center xl:justify-between flex-wrap items-end">
            <ProjectFilter projects={projects!} onSetProject={setProject} />
            <RoomFilter rooms={rooms!} onSetRoom={setRoom} />
            <PriceFilter price={price!} />
            <SquareFilter square={square!} />
          </div>
          <div className="flex justify-between t8">
            <div className="hidden xl:block xl:w-32"></div>
            <span className="t8">
              {totalItems
                ? `Найдено ${totalItems} квартир`
                : "Ничего не найдено"}
            </span>
            <div className="flex items-center gap-3">
              <ResetIcon onReset={handleReset} />
              <span>Очистить все</span>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
};
