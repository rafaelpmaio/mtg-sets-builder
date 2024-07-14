import ICard from "interfaces/ICard";
import ISet from "interfaces/ISet";
import { returnTrueByPercentage } from "utils/returnTrueByPercentage";

export const setFactory = (setJson: any, cardsList: ICard[]) => {

  const collectedTotal = cardsList.reduce((acc, card) => {
    return card.isCollected ? acc + 1 : acc
  }, 0);

  let newSet: ISet = {
    id: setJson.code,
    name: setJson.name,
    image: String(setJson.keyruneCode).toLowerCase(),
    totalSetSize: setJson.totalSetSize,
    releaseDate: setJson.releaseDate,
    cards: cardsList,
    isFavorite: returnTrueByPercentage(40),
    collectedCardsTotal: collectedTotal,
    isCompleted: collectedTotal == cardsList.length,
  };

  return newSet;
};
