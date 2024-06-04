import { sortByReleaseDate } from "utils/sortByReleaseDate";

export const getSetsUntilYear = (
  untilYear: number,
  allSets: { releaseDate: string }[]
) => {
  const filteredSets = allSets.filter((set) => {
    const setReleaseYear = String(set.releaseDate).slice(0, 4);
    return  Number(setReleaseYear) < untilYear;
  });

  const sortedList = sortByReleaseDate(filteredSets);

  return sortedList;
};
