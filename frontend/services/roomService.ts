import {
  ApartmentDetails,
  AxiosData,
  MetaData,
} from "@/services/roomService.types";
import axios, { AxiosResponse } from "axios";
import { FilterParams, FilteredResponse, Filters } from "./roomService.types";

const api = axios.create({
  baseURL: "http://localhost:8083/api/v1/",
});

export class RoomService {
  getFilters = async (params: FilterParams) => {
    const { data } = await api<AxiosResponse<Filters>>("filters", {
      params: this.getURLSearchParams(params),
    });

    return data.data;
  };

  getFilteredApartments = async (params: FilterParams) => {
    const { data } = await api<AxiosData<ApartmentDetails[]>>("flats", {
      params: this.getURLSearchParams(params),
    });

    return { data: data.data, meta: data.meta };
  };

  private getURLSearchParams(params: Record<string, any>) {
    //сделать на вход красивый объект

    const searchParams = new URLSearchParams();

    for (const param in params) {
      if (!params[param]) continue;

      const arr = Array.isArray(params[param])
        ? params[param]
        : [params[param]];

      arr.forEach((item: string) => {
        searchParams.append(param, item);
      });
    }

    return searchParams;
  }
}
