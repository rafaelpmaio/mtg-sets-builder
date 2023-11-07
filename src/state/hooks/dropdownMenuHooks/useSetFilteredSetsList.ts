import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { filteredSetsListState } from "state/atom";

export const useSetFilteredSetsList = () => {
  const setFilteredSetsList = useSetRecoilState(filteredSetsListState);

  return (setsList: ISet[]) => {
    setFilteredSetsList(setsList);
  };
};
