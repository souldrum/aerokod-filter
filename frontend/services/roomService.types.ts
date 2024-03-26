type Price = {
  max: number;
  max_range: number;
  min: number;
  min_range: number;
};

export type Project = {
  disabled?: boolean;
  id: number;
  is_active?: boolean;
  title: string;
};

export type Room = {
  disabled: boolean;
  is_active: boolean;
  number: number;
};

type Square = {
  max: number;
  max_range: number;
  min: number;
  min_range: number;
};

export type Filters = {
  price: Price;
  projects: Project[];
  rooms: Room[];
  square: Square;
};
