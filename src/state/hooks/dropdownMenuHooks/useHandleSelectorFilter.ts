import { useRecoilValue, useSetRecoilState } from "recoil";
import { setsListState } from "state/atom";
import { useGetSelectedSet } from "../selectedSetHooks/useGetSelectedSet";
import { useSetFilteredCardsList } from "./useSetFilteredCardsList";
import { useSetFilteredSetsList } from "./useSetFilteredSetsList";

export const useHandleSelectorFilter = () => {
  const setsList = useRecoilValue(setsListState);
  const selectedSet = useGetSelectedSet();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  const updatedCollection = setsList.find(
    (collection) => collection.id === selectedSet?.id
  );

  return (option: string) => {
    // Filters from HomePage
    if (option === "All Collections") {
      setFilteredSetsList(setsList);
    }
    if (option === "Collect List") {
      setFilteredSetsList(setsList.filter((collection) => collection.collect));
    }
    if (option === "Completed Sets") {
      setFilteredSetsList(
        setsList.filter((collection) => collection.isCompleted)
      );
    }
    // Filters from CollectionPage
    if (option === "Number") {
      //FALTA IMPLEMENTAR
      // const sortedList = updatedCollection?.cards.sort(
      //   (a, b) => Number(a.number) - Number(b.number)
      // );
      setFilteredCardsList(updatedCollection ? updatedCollection.cards : []);
    }

    if (option === "Collected") {
      return updatedCollection
        ? setFilteredCardsList(
            updatedCollection.cards.filter((card) => card.isCollected)
          )
        : null;
    }
    if (option === "Missing") {
      return updatedCollection
        ? setFilteredCardsList(
            updatedCollection.cards.filter((card) => !card.isCollected)
          )
        : null;
    }
  };
};
