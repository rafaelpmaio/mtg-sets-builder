import ISet from "interfaces/ISet";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import { useGetSetsList } from "state/hooks/stateHooks/setsListState/useGetSetsList";

export const useGetUpdatedSet = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();

  if (!selectedSet) {
    console.log("no SET selected!");
    return ;
  }

  const set: ISet | undefined = setsList.find(
    (set) => set.id === selectedSet.id
  );
  if (!set) {
    console.log("fail to find the selected SET");
    return;
  }
  return set;
};
