import axios from "axios";

export const httpMtgJson = axios.create({
  baseURL: "https://mtgjson.com/api/v5/",
});

