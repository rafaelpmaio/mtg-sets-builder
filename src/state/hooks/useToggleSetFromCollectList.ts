import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { setsListState } from "state/atom";

export const useToggleSetFromCollectList = () => {
  const toggleCollectFromList = useSetRecoilState(setsListState);

  return (selectedSet: ISet, checkStatus: boolean = false) => {
    toggleCollectFromList((prevList) =>
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
