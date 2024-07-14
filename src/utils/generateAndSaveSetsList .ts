import { httpMtgJson } from "httpApi";
import { filterSetsByDateRange } from "utils/filterSetsByDateRange";
import { getAllSets } from "utils/getAllSets";
import { saveAs } from 'file-saver';
import { setsListBuilder } from "utils/builders/setsListBuilder";
import ISet from "interfaces/ISet";
import { toast } from "react-toastify";

export const generateAndSaveSetsList  = (startDate:Date | null, endDate:Date | null) => {
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
        const filteredSetsList = filterSetsByDateRange(startDate,endDate, allSets);
        return filteredSetsList
      }).then((filteredSets) => {
        const setsList: ISet[] = setsListBuilder(filteredSets);
        const setsString = JSON.stringify(setsList)
        const blob = new Blob([setsString], { type: "application/json" });
        saveAs(blob, "data.json");
        toast.dismiss(loading);
      });

  };
};
