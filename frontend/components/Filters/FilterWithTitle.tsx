import React from "react";
import cn from "classnames";

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
        "flex flex-col gap-3 basis-[428px]",
        className && className
      )}
    >
      <span className="opacity-40 t8">{title}</span>
      {children}
    </div>
  );
};
