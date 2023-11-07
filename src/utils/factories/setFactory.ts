import ICard from "interfaces/ICard";
import ISet from "interfaces/ISet";

export const setFactory = (setJson: any, cardsList: ICard[]) => {
  let newSet: ISet = {
    id: setJson.code,
    name: setJson.name,
    image: String(setJson.keyruneCode).toLowerCase(),
    totalSetSize: setJson.totalSetSize,
    releaseDate: setJson.releaseDate,
    cards: cardsList,
    collect: false,
    collectedCardsTotal:0,
    isCompleted: false,
  };

  return newSet;
};
