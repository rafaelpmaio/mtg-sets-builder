export const getSetsUntilYear = (year: number, allSets: {releaseDate:string}[]) => {

  const filteredSets = allSets.filter((set) => {
    const setReleaseYear = String(set.releaseDate).slice(0, 4);
    return Number(setReleaseYear) < year;
  });
  return filteredSets;
};
