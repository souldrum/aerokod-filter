import React from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

const data = [
  {
    id: 9,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "3805800",
    old_price: "5929876",
    square: "44",
    release_dates: "3кв. 2026",
    floor: "3",
    image: "https://via.placeholder.com/640x480.png/0011ee?text=quisquam",
  },
  {
    id: 11,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "10294970",
    old_price: "3511444",
    square: "66",
    release_dates: "3кв. 2026",
    floor: "2",
    image: "https://via.placeholder.com/640x480.png/008844?text=at",
  },
  {
    id: 12,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "10302248",
    old_price: "4413112",
    square: "69",
    release_dates: "3кв. 2026",
    floor: "2",
    image: "https://via.placeholder.com/640x480.png/00bb22?text=voluptatem",
  },
  {
    id: 13,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "2079704",
    old_price: "7325428",
    square: "24",
    release_dates: "3кв. 2026",
    floor: "1",
    image: "https://via.placeholder.com/640x480.png/00ee99?text=voluptatibus",
  },
  {
    id: 19,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "13887667",
    old_price: "10120894",
    square: "48",
    release_dates: "3кв. 2026",
    floor: "1",
    image: "https://via.placeholder.com/640x480.png/00bbdd?text=veniam",
  },
  {
    id: 32,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "13075981",
    old_price: "11431749",
    square: "55",
    release_dates: "3кв. 2026",
    floor: "1",
    image: "https://via.placeholder.com/640x480.png/000055?text=eius",
  },
  {
    id: 33,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "11884276",
    old_price: "6516077",
    square: "89",
    release_dates: "3кв. 2026",
    floor: "8",
    image: "https://via.placeholder.com/640x480.png/000099?text=accusamus",
  },
  {
    id: 35,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "9484557",
    old_price: "7529041",
    square: "89",
    release_dates: "3кв. 2026",
    floor: "8",
    image: "https://via.placeholder.com/640x480.png/000022?text=doloribus",
  },
  {
    id: 43,
    project_title: "Humberto Bartell I",
    rooms: 1,
    studio: false,
    price: "10234509",
    old_price: "7458016",
    square: "88",
    release_dates: "3кв. 2026",
    floor: "1",
    image: "https://via.placeholder.com/640x480.png/00bbbb?text=a",
  },
];

export const List: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2.5 lg:gap-x-5 lg:gap-y-12 title-gutter">
      {data.map((c) => (
        <Card key={c.id} card={c} />
      ))}
      <div className="col-span-full 2xl:col-start-2 2xl:col-end-3 pt-3.5 lg:pt-4">
        <Button className="w-full">Показать еще 15 из 20</Button>
      </div>
    </div>
  );
};
