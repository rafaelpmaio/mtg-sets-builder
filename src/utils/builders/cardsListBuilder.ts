import ICard from "interfaces/ICard";
import { cardFactory } from "utils/factories/cardFactory";

export const cardsListBuilder = (mtgJsonSetData: any) => {
  let cardsListPromise: ICard[] = mtgJsonSetData.cards.map(
    (card: any) => {
      const newCard = cardFactory(card);
      return newCard;
    }
  );
  return cardsListPromise;
};
