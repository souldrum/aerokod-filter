import { useFiltersData } from "@/hooks/useFiltersData";
import { useList } from "@/hooks/useList";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import { FilterIcon } from "../Filters/FilterIcon";
import { Filters } from "../Filters/Filters";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showFilters, setShowFilters] = React.useState(false);
  const { isLoading } = useList();
  const { filtersLoading } = useFiltersData();

  if (isLoading || filtersLoading)
    return (
      <div className="flex h-screen justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );

  return (
    <div className="container pt-4 lg:pt-8">
      <h4 className="mb-6 2xl:mb-12">ПЛАНИРОВКИ</h4>
      <MobileView>
        {showFilters && <Filters onVisible={setShowFilters} />}
        <div className="flex flex-col py-2.5 mb-8">
          <Button onClick={() => setShowFilters(true)}>
            <span className="flex justify-center items-baseline gap-2">
              Фильтр
              <FilterIcon />
            </span>
          </Button>
        </div>
      </MobileView>

      <BrowserView>
        <Filters />
      </BrowserView>
      {children}
    </div>
  );
};
