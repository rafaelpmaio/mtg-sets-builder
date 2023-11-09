import { useRecoilValue } from "recoil";
import { filteredSetsListState } from "state/atom";

export const useGetFilteredSetsList = () => {
  const collectionsList = useRecoilValue(filteredSetsListState);
  return collectionsList;
};
