import ISet from "interfaces/ISet";
import useSetSetsList from "../../stateHooks/setsListState/useSetSetsList";
import { httpMtgJson } from "httpApi";
import { getSetsUntilYear } from "../../../../utils/buildSetsListUtils/getSetsUntilYear";
import { getAllSets } from "../../../../utils/buildSetsListUtils/getAllSets";
import { buildSetsList } from "../../../../utils/builders/buildSetsList";
import { useGetSetsList } from "../../stateHooks/setsListState/useGetSetsList";

export const useBuildSetsList = () => {
  const setsList = useGetSetsList();
  const setSetsList = useSetSetsList();
  return () => {
    if (!setsList.length) {
      httpMtgJson
        .get("AllPrintings.json")
        .then((res) => {
          return JSON.parse(res.request.response);
        })
        .then((mtgJsonSets) => {
          return getAllSets(mtgJsonSets);
        })
        .then((allSets) => {
          return getSetsUntilYear(2006, allSets);
        })
        .then((filteredSets) => {
          const setsList: ISet[] = buildSetsList(filteredSets);
          console.log("não existe, fez novo", setsList);
          setSetsList(setsList);
        });
    }
  };
};
