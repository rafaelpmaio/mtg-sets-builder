import ISet from "interfaces/ISet";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";

export const useToggleSetFromCollectList = () => {
  const toggleCollectFromList = useSetSetsList();
  const prevList = useGetSetsList();

  return (selectedSet: ISet, checkStatus: boolean = false) => {
    toggleCollectFromList(
      prevList.map((set) => {
        if (set.id === selectedSet.id) {
          return {
            ...set,
            collect: checkStatus,
          };
        }
        return set;
      })
    );
  };
};
