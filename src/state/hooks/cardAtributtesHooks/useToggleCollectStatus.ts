import ICard from "interfaces/ICard";
import { useGetSelectedSet } from "../selectedSetHooks/useGetSelectedSet";
import { useRecoilState } from "recoil";
import { setsListState } from "state/atom";
import { useGetUpdatedSet } from "../useGetUpdatedSet";

export const useToggleCardCollectStatus = () => {
  // const selectedSet = useGetSelectedSet();
  const [setsList, updateSetsList] = useRecoilState(setsListState);
  const set = useGetUpdatedSet();

  return (selectedCard: ICard, checkStatus: boolean = false) => {
    // if (!selectedSet) {
    //   alert("selected set not found");
    //   return;
    // }

    // const set = setsList.find((set) => set.id === selectedSet.id);

    // if (!set) {
    //   console.log("set not found in list");
    //   return;
    // }

    const cardsList = set?.cards;
    const updatedCardsList = cardsList?.map((card) => {
      if (card.id === selectedCard.id) {
        return {
          ...card,
          isCollected: checkStatus,
        };
      }
      return card;
    });

    const collectedTotal = updatedCardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    console.log("total collected", collectedTotal);

    updateSetsList((prevList) =>
      prevList.map((set) => {
        if (set.id === selectedSet.id) {
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
