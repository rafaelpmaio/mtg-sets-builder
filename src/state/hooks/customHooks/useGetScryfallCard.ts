import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import { useEffect, useState } from "react";
import { useGetScryfallData } from "../stateHooks/scryfallDataState/useGetScryfallData";

export const useGetScryfallCard = (card: ICard) => {
  const [scryfallCard, setScryfallCard] = useState<IScryfallData>();
  const scryfallData = useGetScryfallData();
  const foundCard = scryfallData.find((data) => data.id === card.id);

  useEffect(() => {
    setScryfallCard(foundCard);
  }, [foundCard]);

  return scryfallCard;
};
