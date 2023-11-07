import ISet from "interfaces/ISet";
import useSetSetsList from "../setsListHooks/useSetSetsList";
import { httpMtgJson } from "httpApi";
import { getSetsUntilYear } from "../../../utils/setsListBuilderFunctions/getSetsUntilYear";
import { getAllSets } from "../../../utils/setsListBuilderFunctions/getAllSets";
import { buildSetsList } from "../../../utils/setsListBuilderFunctions/buildSetsList";
import { useGetSetsList } from "../setsListHooks/useGetSetsList";

export const useSetsListBuilder = () => {
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
