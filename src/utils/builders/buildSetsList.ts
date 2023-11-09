import { cardsListFactory } from "utils/factories/cardsListFactory";
import { setFactory } from "utils/factories/setFactory";

export const buildSetsList = (filteredSets: { releaseDate: string }[]) => {
  const setsList = filteredSets.map((set) => {
    const cardsList = cardsListFactory(set);
    const newSet = setFactory(set, cardsList);
    return newSet;
  });
  return setsList;
};
