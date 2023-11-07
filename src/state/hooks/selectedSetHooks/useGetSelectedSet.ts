import { useRecoilValue } from "recoil";
import { selectedSetState } from "state/atom";

export const useGetSelectedSet = () => {
  const collection = useRecoilValue(selectedSetState);
  return collection;
};
