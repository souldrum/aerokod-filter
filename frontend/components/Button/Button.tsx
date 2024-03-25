import cn from "classnames";
import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "t6-medium bg-blue text-white p-2 rounded-md",
        className && className
      )}
      onClick={onClick}
    >
      <div className="p-1 lg:p-2">{children}</div>
    </button>
  );
};
