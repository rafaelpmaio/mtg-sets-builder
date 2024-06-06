import { cardsListBuilder } from "utils/builders/cardsListBuilder";
import { setFactory } from "utils/factories/setFactory";

export const setsListBuilder = (filteredSets: { releaseDate: string }[]) => {
  const setsList = filteredSets.map((set) => {
    const cardsList = cardsListBuilder(set);
    const newSet = setFactory(set, cardsList);
    return newSet;
  });
  return setsList;
};
