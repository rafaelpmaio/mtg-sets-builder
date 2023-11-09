import { useRecoilValue } from "recoil";
import { saveSetInMemoryState } from "state/atom";

export const useGetSetsSavedInMemory = () => {
  const setsInMemory = useRecoilValue(saveSetInMemoryState);
  return setsInMemory;
};
