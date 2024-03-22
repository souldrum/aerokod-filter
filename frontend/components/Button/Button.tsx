import cn from "classnames";
import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <button
      className={cn(
        "t6-medium bg-blue text-white p-2 rounded-md",
        className && className
      )}
    >
      <div className="p-0 lg:p-2">{children}</div>
    </button>
  );
};
