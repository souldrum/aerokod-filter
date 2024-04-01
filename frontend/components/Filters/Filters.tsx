import { useFilters } from "@/hooks/useApi";
import { useMount } from "@/hooks/useMount";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  getPriceMaxSelector,
  getPriceMinSelector,
  getProjectSelector,
  getRoomsSelector,
  getSquareMaxSelector,
  getSquareMinSelector,
} from "@/redux/selectors/FiltersSelectors";
import {
  reset,
  setPriceMax,
  setPriceMin,
  setSquareMax,
  setSquareMin,
} from "@/redux/slices/FiltersSlice";
import { FloatingOverlay } from "@floating-ui/react";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import { CloseIcon } from "./CloseIcon";
import { ProjectFilter } from "./ProjectFilter";
import { Range } from "./Range";
import { ResetIcon } from "./ResetIcon";
import { RoomFilter } from "./RoomFilter";
import cn from "classnames";

export const Filters: React.FC<{ onVisible?: (value: boolean) => void }> = ({
  onVisible = () => {},
}) => {
  const project = useAppSelector(getProjectSelector);
  const rooms = useAppSelector(getRoomsSelector);
  const priceMin = useAppSelector(getPriceMinSelector);
  const priceMax = useAppSelector(getPriceMaxSelector);
  const squareMin = useAppSelector(getSquareMinSelector);
  const squareMax = useAppSelector(getSquareMaxSelector);
  const { data, isLoading, error, isPlaceholder } = useFilters({
    "f[rooms][]": rooms,
    "f[projects][]": project,
    "f[price][min]": priceMin,
    "f[price][max]": priceMax,
    "f[square][min]": squareMin,
    "f[square][max]": squareMax,
  });

  const dispatch = useAppDispatch();
  // const isMounted = useMount();
  // if (!isMounted) {
  //   return null;
  // }

  if (isLoading)
    return (
      <div className="flex justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );

  if (error)
    return <h6 className="text-center">Ошибка загрузки {error.message}</h6>;

  const handleReset = () => dispatch(reset());

  return (
    <>
      <MobileView>
        <FloatingOverlay
          className="fixed top-0 inset-x-0 z-10 backdrop-blur-lg backdrop-brightness-50"
          lockScroll
        >
          <div
            className={cn(
              "bg-white p-5 pb-0 rounded-b-2xl animate-filters-in",
              isPlaceholder && "animate-pulse"
            )}
          >
            <CloseIcon
              className="ml-auto mb-6"
              onClick={() => onVisible(false)}
            />
            <div className="flex flex-col gap-8">
              <h4>ФИЛЬТР</h4>
              <ProjectFilter projects={data!.projects} />
              <RoomFilter rooms={data!.rooms} />
              <Range
                name="price"
                title="Стоимость"
                min={data!.price.min}
                max={data!.price.max}
                minRange={data!.price.min_range}
                maxRange={data!.price.max_range}
                setMin={setPriceMin}
                setMax={setPriceMax}
              />
              <Range
                name="square"
                title="Задайте площадь, м²"
                min={data!.square.min}
                max={data!.square.max}
                minRange={data!.square.min_range}
                maxRange={data!.square.max_range}
                setMin={setSquareMin}
                setMax={setSquareMax}
              />
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
            isPlaceholder && "animate-pulse opacity-15"
          )}
        >
          <div className="flex gap-3 justify-center xl:justify-between flex-wrap items-end">
            <ProjectFilter projects={data!.projects} />
            <RoomFilter rooms={data!.rooms} />
            <Range
              name="price"
              title="Стоимость"
              min={data!.price.min}
              max={data!.price.max}
              minRange={data!.price.min_range}
              maxRange={data!.price.max_range}
              setMin={setPriceMin}
              setMax={setPriceMax}
            />
            <Range
              name="square"
              title="Задайте площадь, м²"
              min={data!.square.min}
              max={data!.square.max}
              minRange={data!.square.min_range}
              maxRange={data!.square.max_range}
              setMin={setSquareMin}
              setMax={setSquareMax}
            />
          </div>
          <div className="flex justify-between t8">
            <div className="hidden xl:block xl:w-32"></div>
            <span className="t8">Найдено {} квартир</span>
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
