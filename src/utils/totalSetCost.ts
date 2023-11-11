import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";
import { getValueWithKey } from "./getValueWithKey";

export const totalSetCost = (set: ISet, scryfallData: IScryfallData[]) => {

  const cardsList = set.cards;
  const totalCost = cardsList.reduce(function (accumulator, card) {
    const scryfallCardData = scryfallData.find(scryfallCard => scryfallCard.id === card.id);
    return accumulator + Number(getValueWithKey('usd', scryfallCardData?.prices));
  }, 0);

  return totalCost.toFixed(2)
};
