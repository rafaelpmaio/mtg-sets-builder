import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { setsListState } from "state/atom";

export const useToggleSetFromCollectList = () => {
  const toggleFromList = useSetRecoilState(setsListState);

  return (selectedSet: ISet, checkStatus: boolean = false) => {
    toggleFromList((prevList) =>
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
