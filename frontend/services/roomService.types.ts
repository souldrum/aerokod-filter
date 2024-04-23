import { AxiosResponse } from "axios";

export type Price = {
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

export type Square = {
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

export type ApartmentDetails = {
  id: number;
  project_title: string;
  rooms: number;
  studio: boolean;
  price: string;
  old_price?: string;
  square: string;
  release_dates: string;
  floor: string;
  image: string;
};

export type PagesLink = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export type MetaLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type MetaData = {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type FilteredResponse = {
  data: ApartmentDetails[];
  meta: MetaData;
};

export interface AxiosData<T> extends AxiosResponse<T> {
  meta: MetaData;
}

export type ApiParams = {
  "f[projects][]"?: number;
  "f[rooms][]"?: string[];
  "f[price][min]"?: number;
  "f[price][max]"?: number;
  "f[square][min]"?: number;
  "f[square][max]"?: number;
  per_page?: number;
  page?: number;
};

export type SearchParams = {
  projects?: string;
  rooms?: string[];
  priceMin?: string;
  priceMax?: string;
  squareMin?: string;
  squareMax?: string;
  perPage?: string | number;
  page?: number;
};
