import ICard from "interfaces/ICard";
import { useSetRecoilState } from "recoil";
import { filteredCardsListState } from "state/atom";

export const useSetFilteredCardsList = () => {
  const setFilteredCardsList = useSetRecoilState(filteredCardsListState);

  return (cardsList: ICard[]) => {
    setFilteredCardsList(cardsList);
  };
};
