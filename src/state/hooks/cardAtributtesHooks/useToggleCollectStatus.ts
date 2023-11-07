import ICard from "interfaces/ICard";
import { useSetRecoilState } from "recoil";
import { setsListState } from "state/atom";
import { useGetUpdatedSet } from "../useGetUpdatedSet";

export const useToggleCardCollectStatus = () => {
  const updateSetsList = useSetRecoilState(setsListState);
  const setOfTheCard = useGetUpdatedSet();
  const calculateCollectedTotal = (cardsList: ICard[]) => {
    const collectedTotal = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    return collectedTotal;
  };

  return (selectedCard: ICard, checkStatus: boolean = false) => {
    if (!setOfTheCard) {
      console.log("não pudemos encontrar o SET desta carta");
      return;
    }
    const updatedCardsList = setOfTheCard.cards.map((card) => {
      if (card.id === selectedCard.id) {
        return {
          ...card,
          isCollected: checkStatus,
        };
      }
      return card;
    });

    const collectedTotal = calculateCollectedTotal(updatedCardsList);

    updateSetsList((prevList) =>
      prevList.map((set) => {
        if (set.id === setOfTheCard.id) {
          set = {
            ...set,
            collectedCardsTotal: collectedTotal,
            cards: updatedCardsList,
          };
          return set;
        }
        return set;
      })
    );
  };
};
