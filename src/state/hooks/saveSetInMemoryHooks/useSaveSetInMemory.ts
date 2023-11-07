import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { saveSetInMemoryState } from "state/atom";

export const useSaveSetInMemory = () => {
  const saveSet = useSetRecoilState(saveSetInMemoryState);
  return (set: ISet) => {
    saveSet((sets) => {
      return !sets.includes(set.id) ? [...sets, set.id] : [...sets];
    });
  };
};
