import ISet from "interfaces/ISet";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";

export const useUpdateCompletedSetStatus = () => {
  const toggleCollectFromList = useSetSetsList();
  const prevList = useGetSetsList();

  return (selectedSet: ISet | undefined) => {
    if (!selectedSet) {
      console.log("no set found");
      return;
    }
    const cardsList = selectedSet.cards;
    const totalCardsCollected = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    let isCompleted: boolean = false;

    totalCardsCollected === cardsList.length ? isCompleted = true : isCompleted = false
    console.log(totalCardsCollected)

    toggleCollectFromList(
      prevList.map((set) => {
        if (set.id === selectedSet.id) {
          return {
            ...set,
            isCompleted: isCompleted,
          };
        }
        return set;
      })
    );
  };
};
