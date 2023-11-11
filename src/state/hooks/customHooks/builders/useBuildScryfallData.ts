import { useSetScryfallData } from "../../stateHooks/scryfallDataState/useSetScryfallData";
import { useGetSetsSavedInMemory } from "../../stateHooks/saveSetInMemoryState/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "../../stateHooks/selectedSetState/useGetSelectedSet";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "../../stateHooks/saveSetInMemoryState/useSaveSetInMemory";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";

export const useBuildScryfallData = () => {
  const setScryfallData = useSetScryfallData();
  const saveSetInMemory = useSaveSetInMemory();
  const setsInMemory = useGetSetsSavedInMemory();
  const selectedSet = useGetSelectedSet();

  return (cardsList: ICard[]) => {
    if (!selectedSet) {
      console.log("nenhum set encontrado");
      return;
    }

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
                prices: scryfallData.prices,
                images: scryfallData.image_uris,
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
    } else console.log("SET já salvo! não fez nova requisição ao Scryfall");
  };
};
