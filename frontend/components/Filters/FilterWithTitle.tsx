import cn from "classnames";
import React from "react";
import { isBrowser } from "react-device-detect";

type Props = {
  title: string;
  className?: string;
};

export const FilterWithTitle: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isBrowser && "basis-[428px]",
        className && className
      )}
    >
      <span className="opacity-40 t13 sm:t8">{title}</span>
      {children}
    </div>
  );
};
