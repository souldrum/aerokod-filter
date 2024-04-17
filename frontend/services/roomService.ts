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
  getFilters = async (params?: FilterParams) => {
    const { data } = await api<AxiosResponse<Filters>>("filters", {
      params: params ?? undefined,
    });

    return data.data;
  };
  getApartments = async () => {
    const { data } = await api<AxiosData<ApartmentDetails[]>>("flats");

    return { data: data.data, meta: data.meta };
  };
  getFilteredApartments = async (params?: FilterParams) => {
    const { data } = await api<AxiosData<ApartmentDetails[]>>("flats", {
      params: params ?? undefined,
    });

    return { data: data.data, meta: data.meta };
  };
}
