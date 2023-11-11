export const sortByReleaseDate = (setsList: { releaseDate: string }[]) => {
  const sortedSetsList = setsList.sort((a, b) => {
    const yearA = Number(String(a.releaseDate).slice(0, 4));
    const yearB = Number(String(b.releaseDate).slice(0, 4));
    const monthA = Number(String(a.releaseDate).slice(5, 7));
    const monthB = Number(String(b.releaseDate).slice(5, 7));

    if (yearA !== yearB) return yearA - yearB;
    return monthA - monthB;
  });

  return sortedSetsList;
};
