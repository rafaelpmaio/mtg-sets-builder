import { useRecoilValue } from "recoil";
import { dropdownMenuOptionsState } from "state/atom";

export const useGetDropdownMenuOptions = () => {
  const options = useRecoilValue(dropdownMenuOptionsState);
  return options;
};
