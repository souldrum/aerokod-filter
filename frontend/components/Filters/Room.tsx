import React from "react";

type Props = { title: string };

export const Room: React.FC<Props> = ({ title }) => {
  return (
    <div className="t7 border border-black-100 rounded-base px-4 py-4 sm:px-6 sm:py-3.5 cursor-pointer">
      {title}
    </div>
  );
};
