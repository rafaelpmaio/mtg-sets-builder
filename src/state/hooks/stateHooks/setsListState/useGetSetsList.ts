import { useRecoilValue } from "recoil";
import { setsListState } from "state/atom";

export const useGetSetsList = () => {
  const list = useRecoilValue(setsListState);
  return list;
};
