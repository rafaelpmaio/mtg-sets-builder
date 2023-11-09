import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import { useEffect, useState } from "react";
import { useGetScryfallCardsData } from "../stateHooks/scryfallCardsDataState/useGetScryfallCardsData";

export const useGetScryfallCard = (card: ICard) => {
  const [scryfallCard, setScryfallCard] = useState<IScryfallData>();
  const scryfallData = useGetScryfallCardsData();
  const foundCard = scryfallData.find((data) => data.id === card.id);

  useEffect(() => {
    setScryfallCard(foundCard);
  }, [foundCard]);

  return scryfallCard;
};
