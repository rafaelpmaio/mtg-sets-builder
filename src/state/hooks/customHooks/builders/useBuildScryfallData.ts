import { useSetScryfallData } from "../../stateHooks/scryfallDataState/useSetScryfallData";
import ICard from "interfaces/ICard";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";
import { toast } from "react-toastify";

export const useBuildScryfallData = () => {
  const setScryfallData = useSetScryfallData();

  return (cardsList: ICard[]) => {

    const loading = toast.loading('give me a minute to load the cards!')
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
      toast.update(loading, { render: 'There they are!', type: "success", isLoading: false, autoClose: 2000 })
    });
  };
};
