import { httpMtgJson } from "httpApi";
import { getSetsUntilYear } from "utils/buildSetsListUtils/getSetsUntilYear";
import { getAllSets } from "utils/buildSetsListUtils/getAllSets";
import { saveAs } from 'file-saver';
import { buildSetsList } from "utils/builders/buildSetsList";
import ISet from "interfaces/ISet";
import { toast } from "react-toastify";

export const useBuildSetsList = () => {
  return () => {
    const loading = toast.loading('getting file, this may take a little while!');
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
        return filteredSetsList
      }).then((filteredSets) => {
        const setsList: ISet[] = buildSetsList(filteredSets);
        const setsString = JSON.stringify(setsList)
        const blob = new Blob([setsString], { type: "application/json" });
        saveAs(blob, "data.json");
        toast.dismiss(loading);
      });

  };
};
