import axios from "axios";
import { Filters } from "./roomService.types";

export class RoomService {
  getFilters = async () => {
    const { data } = await axios<Filters>(
      "http://localhost:8083/api/v1/filters"
    );

    return data;
  };
}
