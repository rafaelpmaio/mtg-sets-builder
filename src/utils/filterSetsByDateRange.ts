import { sortByReleaseDate } from "utils/sortByReleaseDate";

export const filterSetsByDateRange = (
  fromDate: Date | null,
  untillDate: Date | null,
  allSets: { releaseDate: string }[]
) => {

  const initialDate = fromDate ? fromDate : new Date('1993-08-05')
  const endDate = untillDate ? untillDate : new Date()

  const filteredSets = allSets.filter((set) => {
    const releaseDate = new Date(set.releaseDate);
    return releaseDate >= initialDate && releaseDate <= endDate
  });

  const sortedList = sortByReleaseDate(filteredSets);

  return sortedList;
};

