import { httpScryfall } from "httpApi";
import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";

interface buildScryfallDataProps {
  cardsList: ICard[];
  setScryfallData: (cardsListData: IScryfallData[]) => void;
  setsInMemory: string[];
  selectedSet: ISet;
  saveSetInMemory: (set: ISet) => void;
}

export const buildScryfallData = ({
  cardsList,
  setScryfallData,
  setsInMemory,
  selectedSet,
  saveSetInMemory,
}: buildScryfallDataProps) => {
  if (!setsInMemory.includes(selectedSet.id)) {
    console.log("fez nova requisição ao Scryfall");
    const scryfallCardArray: Promise<IScryfallData>[] = cardsList.map(
      (card) => {
        let scryfallCard = httpScryfall
          .get(card.scryfallId)
          .then((scryfallResponse) => {
            const scryfallData = scryfallResponse.data;
            let scryfallCard: IScryfallData = {
              id: card.id,
              currentPrice: scryfallData.prices.usd,
              image: scryfallData.image_uris.small,
            };
            return scryfallCard;
          });
        return scryfallCard;
      }
    );

    Promise.all(scryfallCardArray).then((scryfallCardArray) => {
      setScryfallData(scryfallCardArray);
      saveSetInMemory(selectedSet);
    });
  } else console.log("não fez nova requisição ao Scryfall");
};
