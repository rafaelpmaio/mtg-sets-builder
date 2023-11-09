import { useEffect } from "react";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import styles from "./_dropdownMenu.module.scss";

interface SelectorProps {
  options: string[];
  defaultOption?: string;
}

const DropdownMenu = ({ options, defaultOption }: SelectorProps) => {
  const optionsName = options.map((option) => option);
  const handleFilter = useHandleSelectorFilter();

  useEffect(() => {
    defaultOption && handleFilter(defaultOption);
  }, [handleFilter, defaultOption]);

  return (
    <select
      className={styles.container}
      onChange={(event) => handleFilter(event.target.value)}
    >
      {optionsName.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default DropdownMenu;
