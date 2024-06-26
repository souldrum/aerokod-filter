import React from "react";
import { Like } from "./Like";
import { formatPrice, formatReleaseDates } from "@/format/format";
import { ApartmentDetails } from "@/services/roomService.types";
import cn from "classnames";

export const Card: React.FC<{ card: ApartmentDetails; className?: string }> = ({
  card,
  className,
}) => {
  const {
    rooms,
    studio,
    square,
    price,
    old_price: oldPrice,
    image,
    project_title: title,
    floor,
    release_dates: release,
  } = card;

  return (
    <section
      className={cn(
        "flex flex-col gap-7 md:gap-12 border border-black-100 rounded-base px-6 py-4 md:px-10 md:pt-8 md:pb-12",
        className && className
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="t6-medium normal-case">
            {studio ? <span>студия </span> : <span>{rooms}-комнатная </span>}
            {square} м<sup>2</sup>
          </h3>
          <div className="flex items-baseline gap-4">
            <h2 className="t3">{formatPrice(price)}</h2>
            {oldPrice && (
              <span className="line-through">{formatPrice(oldPrice)}</span>
            )}
          </div>
        </div>
        <Like className="self-start" />
      </div>

      <div className="flex justify-center">
        <img className="h-44 md:h-52 xl:h-72" src={image} alt="plan" />
      </div>

      <div className="flex flex-col last:border-none">
        <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
          <span className="opacity-50">Проект</span>
          <span>{title}</span>
        </div>
        <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
          <span className="opacity-50">Этаж</span>
          <span>{floor}</span>
        </div>

        <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
          <span className="opacity-50">Срок сдачи</span>
          <span>{formatReleaseDates(release)}</span>
        </div>
      </div>
    </section>
  );
};
