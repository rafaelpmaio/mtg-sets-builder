import ICard from "interfaces/ICard";
import { cardFactory } from "utils/factories/cardFactory";

export const cardsListFactory = (mtgJsonSetData: any) => {
  let cardsList: ICard[] = mtgJsonSetData.cards.map(
    (card: any) => {
      const newCard = cardFactory(card);
      return newCard;
    }
  );
  return cardsList;
};
