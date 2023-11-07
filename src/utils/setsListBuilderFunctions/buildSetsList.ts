import { cardsListBuilder } from "utils/builders/cardsListBuilder";
import { setFactory } from "utils/factories/setFactory";

export const buildSetsList = (filteredSets: {releaseDate: string}[]) => {
    return filteredSets.map((set) => {
        const cardsList = cardsListBuilder(set);
        const newSet = setFactory(set, cardsList);
        return newSet;
      });
}