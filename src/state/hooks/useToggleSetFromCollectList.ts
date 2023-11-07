import ISet from "interfaces/ISet";
import useSetSetsList from "./setsListHooks/useSetSetsList";
import { useGetSetsList } from "./setsListHooks/useGetSetsList";

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
