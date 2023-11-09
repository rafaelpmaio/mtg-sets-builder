export const getAllSets = (mtgJsonSets: any) => {
    const mtgJsonSetsData = mtgJsonSets.data;
        const allSets = Object.values(mtgJsonSetsData).map(
          (set) => set as { releaseDate: string }
        );
        return allSets;
}