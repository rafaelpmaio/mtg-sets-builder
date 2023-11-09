import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { setsListState } from "state/atom";

const useSetSetsList = () => {
  const setSetsList = useSetRecoilState(setsListState);
  return (sets: ISet[]) => {
    setSetsList(sets);
  };
};

export default useSetSetsList;
