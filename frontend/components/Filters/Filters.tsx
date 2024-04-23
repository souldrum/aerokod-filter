import { showTotal } from "@/format/format";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useFiltersData } from "@/hooks/useFiltersData";
import { useList } from "@/hooks/useList";
import { FloatingOverlay } from "@floating-ui/react";
import cn from "classnames";
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
  const { clearQuery } = useAppRouter();
  const { meta } = useList();
  const { filtersError, filtersLoading, price, projects, rooms, square } =
    useFiltersData();

  const [animate, setAnimate] = React.useState("animate-filters-in");

  if (filtersLoading)
    return (
      <div className="flex justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );

  if (filtersError)
    return (
      <p className="t7 text-center pt-0 p-6 2xl:pt-0 2xl:p-12">
        Ошибка загрузки фильтров:
        <span className="text-red-500">{filtersError.message}</span>
      </p>
    );

  const handleReset = () => clearQuery();

  const handleClose = () => {
    handleReset();
    setTimeout(() => {
      setAnimate("animate-filters-out");
    }, 200);
  };

  const handleShowList = () => setAnimate("animate-filters-out");

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) =>
    e.animationName === "filtersSlideOut" && onVisible(false);

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
            className={cn("bg-white p-5 pb-0 rounded-b-2xl", animate)}
            onAnimationEnd={handleAnimationEnd}
          >
            <div>
              <CloseIcon className="ml-auto mb-6" onClick={handleClose} />
              <div className="flex flex-col gap-8">
                <h4>ФИЛЬТР</h4>
                <ProjectFilter projects={projects} />
                <RoomFilter rooms={rooms} />
                <PriceFilter price={price} />
                <SquareFilter square={square} />
              </div>
            </div>
            <Button className="my-12 p-3 w-full" onClick={handleShowList}>
              Смотреть квартиры
            </Button>
          </div>
        </FloatingOverlay>
      </MobileView>

      <BrowserView>
        <div className="flex flex-col gap-12 pb-16 mb-12 border-b-2 border-black-100 border-opacity-20">
          <div className="flex gap-3 justify-center xl:justify-between flex-wrap items-end">
            <ProjectFilter projects={projects} />
            <RoomFilter rooms={rooms} />
            <PriceFilter price={price} />
            <SquareFilter square={square} />
          </div>
          <div className="flex justify-between t8">
            <div className="hidden xl:block xl:w-32"></div>
            <span className="t8">{showTotal(meta.total)}</span>
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
