import { useRecoilValue } from "recoil";
import { filteredCardsListState } from "state/atom";

export const useGetFilteredCardsList = () => {
  const cardsList = useRecoilValue(filteredCardsListState);
  return cardsList;
};
