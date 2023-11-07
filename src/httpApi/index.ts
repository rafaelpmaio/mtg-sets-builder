import axios from "axios";

export const httpMtgJson = axios.create({
  baseURL: "https://mtgjson.com/api/v5/",
});

export const httpScryfall = axios.create({
  baseURL: "https://api.scryfall.com/cards/",
});
