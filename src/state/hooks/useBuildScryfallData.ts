import { useSetScryfallData } from "./cardAtributtesHooks/useSetScryfallData";
import { useGetSetsSavedInMemory } from "./saveSetInMemoryHooks/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "./selectedSetHooks/useGetSelectedSet";
import { buildScryfallData } from "utils/buildScryfallData";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "./saveSetInMemoryHooks/useSaveSetInMemory";

export const useBuildScryfallData = () => {
  const setScryfallData = useSetScryfallData();
  const saveSetInMemory = useSaveSetInMemory();
  const setsInMemory = useGetSetsSavedInMemory();
  const selectedSet = useGetSelectedSet();

  return (cardsList: ICard[]) => {
    selectedSet ?
      buildScryfallData({cardsList, setScryfallData, setsInMemory, selectedSet, saveSetInMemory})
      : console.log('nenhum set encontrado')
  };
};
