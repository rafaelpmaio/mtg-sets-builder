import ISet from "interfaces/ISet";
import useSetSetsList from "../../stateHooks/setsListState/useSetSetsList";
import { httpMtgJson } from "httpApi";
import { getSetsUntilYear } from "../../../../utils/buildSetsListUtils/getSetsUntilYear";
import { getAllSets } from "../../../../utils/buildSetsListUtils/getAllSets";
import { buildSetsList } from "../../../../utils/builders/buildSetsList";
import { useGetSetsList } from "../../stateHooks/setsListState/useGetSetsList";
import {toast} from 'react-toastify';

export const useBuildSetsList = () => {
  const setsList = useGetSetsList();
  const setSetsList = useSetSetsList();
  return () => {
    if (!setsList.length) {
      const loading = toast.loading('loading Sets, this may take a little while!');
      httpMtgJson
        .get("AllPrintings.json")
        .then((res) => {
          return JSON.parse(res.request.response);
        })
        .then((mtgJsonSets) => {
          return getAllSets(mtgJsonSets);
        })
        .then((allSets) => {
          const filteredSetsList = getSetsUntilYear(2006, allSets);
          return filteredSetsList;
        })
        .then((filteredSets) => {
          const setsList: ISet[] = buildSetsList(filteredSets);
          setSetsList(setsList);
          toast.update(loading, {render: "Everything's ready!", type:"success", isLoading: false, autoClose:2000})
        });
    }
  };
};
