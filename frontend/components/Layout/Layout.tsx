import React from "react";
import { Filters } from "../Filters/Filters";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "../Button/Button";
import { useMount } from "@/hooks/useMount";
import { FilterIcon } from "../Filters/FilterIcon";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showFilters, setShowFilters] = React.useState(false);
  const isMounted = useMount();

  if (!isMounted) return null;

  return (
    <div className="container pt-4 lg:pt-8">
      <h4 className="mb-6 2xl:mb-12">ПЛАНИРОВКИ</h4>
      <MobileView>
        {showFilters ? (
          <Filters onVisible={setShowFilters} />
        ) : (
          <div className="flex flex-col py-2.5 mb-8">
            <Button onClick={() => setShowFilters(true)}>
              <span className="flex justify-center items-baseline gap-2">
                Фильтр
                <FilterIcon />
              </span>
            </Button>
          </div>
        )}
      </MobileView>
      <BrowserView>
        <Filters />
      </BrowserView>
      {children}
    </div>
  );
};
