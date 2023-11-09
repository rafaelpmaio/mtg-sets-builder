import { useSetRecoilState } from "recoil";
import { dropdownMenuOptionsState } from "state/atom";

export const useSetDropdownMenuOptions = () => {
  const setOptions = useSetRecoilState(dropdownMenuOptionsState);

  return (options: string[]) => {
    setOptions(options);
  };
};
