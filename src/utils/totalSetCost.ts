import ISet from "interfaces/ISet";

export const totalSetCost = (set: ISet) => {
  const cardsList = set.cards;
  const totalCost = cardsList.reduce(function (accumulator, card) {
    return accumulator + Number(card.currentPrice);
  }, 0);

  return totalCost
};
