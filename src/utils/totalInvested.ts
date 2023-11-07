import ISet from "interfaces/ISet";

export const totalInvested = (set: ISet) => {
const cardsList = set.cards;
const totalInvested = cardsList.reduce(function(accumulator, card){
    return accumulator + Number(card.pricePaid)
}, 0)
return totalInvested;
}