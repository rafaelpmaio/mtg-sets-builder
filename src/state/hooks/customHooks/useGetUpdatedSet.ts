import ISet from "interfaces/ISet";
import { toast } from "react-toastify";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import { useGetSetsList } from "state/hooks/stateHooks/setsListState/useGetSetsList";

export const useGetUpdatedSet = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();

  if (!selectedSet) {
    return;
  }

  const set: ISet | undefined = setsList.find(
    (set) => set.id === selectedSet.id
  );
  if (!set) {
    toast.error("could not find the selected SET");
    return;
  }
  return set;
};
