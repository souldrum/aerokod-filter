import {
  ApartmentDetails,
  AxiosData,
  SearchParams,
} from "@/services/roomService.types";
import axios, { AxiosResponse } from "axios";
import { ApiParams, Filters } from "./roomService.types";

const api = axios.create({
  baseURL: "http://localhost:8083/api/v1/",
});

export class RoomService {
  getFilters = async (params: SearchParams) => {
    const { data } = await api<AxiosResponse<Filters>>("filters", {
      params: this.getURLSearchParams(params),
    });

    return data.data;
  };

  getFilteredApartments = async (params: SearchParams) => {
    const { data } = await api<AxiosData<ApartmentDetails[]>>("flats", {
      params: this.getURLSearchParams(params),
    });

    return { data: data.data, meta: data.meta };
  };

  private getURLSearchParams(params: SearchParams) {
    const paramsApi = this.transformParams(params);

    const searchParams = new URLSearchParams();

    for (const param in paramsApi) {
      const value = paramsApi[param as keyof ApiParams];

      if (!value) continue;

      const arr = Array.isArray(value) ? value : [value];

      arr.forEach((item: string) => {
        searchParams.append(param, item);
      });
    }

    searchParams.append("page", "1");

    return searchParams;
  }

  private transformParams(params: SearchParams) {
    const {
      perPage,
      priceMax,
      priceMin,
      projects,
      rooms,
      squareMax,
      squareMin,
    } = params;

    const paramsURL: ApiParams = {
      "f[projects][]": projects,
      "f[rooms][]": rooms,
      "f[price][min]": priceMin,
      "f[price][max]": priceMax,
      "f[square][min]": squareMin,
      "f[square][max]": squareMax,
      per_page: perPage || undefined,
    };

    return paramsURL;
  }
}
