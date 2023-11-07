import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  setsListState,
  filteredSetsListState,
  filteredCardsListState,
} from "state/atom";
import { useGetSelectedSet } from "../selectedSetHooks/useGetSelectedSet";

export const useHandleSelectorFilter = () => {
  const setsList = useRecoilValue(setsListState);
  const setFilteredSetsList = useSetRecoilState(filteredSetsListState);
  const setCardsList = useSetRecoilState(filteredCardsListState);
  const selectedCollection = useGetSelectedSet();

  const updatedCollection = setsList.find(
    (collection) => collection.id === selectedCollection?.id
  );

  return (option: string) => {
    // Filters from HomePage
    if (option === "All Collections") {
      setFilteredSetsList(setsList);
    }
    if (option === "Collect List") {
      setFilteredSetsList(
        setsList.filter((collection) => collection.collect)
      );
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
      setCardsList(updatedCollection ? updatedCollection.cards : null);
    }

    if (option === "Collected") {
      return updatedCollection
        ? setCardsList(
            updatedCollection.cards.filter((card) => card.isCollected)
          )
        : null;
    }
    if (option === "Missing") {
      return updatedCollection
        ? setCardsList(
            updatedCollection.cards.filter((card) => !card.isCollected)
          )
        : null;
    }
  };
};
