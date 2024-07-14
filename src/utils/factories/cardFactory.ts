import ICard from "interfaces/ICard";

export const cardFactory = (mtgJson: any) => {
  const newCard: ICard = {
    id: mtgJson.uuid,
    scryfallId: mtgJson.identifiers.scryfallId,
    name: mtgJson.name,
    number: mtgJson.number,
    rarity: mtgJson.rarity,
    type: mtgJson.type,
    manaCost: mtgJson.manaCost,
    manaValue: mtgJson.manaValue,
    colors: mtgJson.colors,
    tcgLink: mtgJson.purchaseUrls.tcgplayer,
    isCollected: false,
    pricePaid: '0',
  };
  return newCard;
};
