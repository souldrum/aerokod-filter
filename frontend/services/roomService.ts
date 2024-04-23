import {
  ApartmentDetails,
  AxiosData,
  MetaData,
  SearchParams,
} from "@/services/roomService.types";
import axios, { AxiosResponse } from "axios";
import { ApiParams, FilteredResponse, Filters } from "./roomService.types";

const api = axios.create({
  baseURL: "http://localhost:8083/api/v1/",
});

export class RoomService {
  getFilters = async (params: ApiParams) => {
    const { data } = await api<AxiosResponse<Filters>>("filters", {
      params: this.getURLSearchParams(params),
    });

    return data.data;
  };

  getFilteredApartments = async (params: ApiParams) => {
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

  private transformParams(params: SearchParams) {
    const {
      page,
      perPage,
      priceMax,
      priceMin,
      projects,
      rooms,
      squareMax,
      squareMin,
    } = params;

    const paramsURL: ApiParams = {
      "f[projects][]": projects ? Number(projects) : undefined,
      "f[rooms][]": rooms && rooms.length ? rooms : undefined,
      "f[price][min]": priceMin ? Number(priceMin) : undefined,
      "f[price][max]": priceMax ? Number(priceMax) : undefined,
      "f[square][min]": squareMin ? Number(squareMin) : undefined,
      "f[square][max]": squareMax ? Number(squareMax) : undefined,
      per_page: perPage ? Number(perPage) : 9,
      page: 1,
    };

    return paramsURL;
  }
}
