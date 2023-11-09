import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { selectedSetState } from "state/atom";

export const useSetSelectedSet = () => {
  const setCollection = useSetRecoilState(selectedSetState);

  return (collection: ISet) => {
    setCollection(collection);
  };
};
