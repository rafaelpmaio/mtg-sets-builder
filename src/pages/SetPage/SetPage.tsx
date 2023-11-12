import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import CardsList from "./CardsList/CardList";
import styles from "./_setPage.module.scss";
import { useBuildScryfallData } from "state/hooks/customHooks/builders/useBuildScryfallData";
import { useEffect } from "react";
import { useGetUpdatedSet } from "state/hooks/customHooks/useGetUpdatedSet";
import { useUpdateCompletedSetStatus } from "state/hooks/customHooks/useUpdateCompletedSetStatus";

const SetPage = () => {
  const set = useGetUpdatedSet();
  const cardsList = useGetFilteredCardsList();
  const buildScryfallData = useBuildScryfallData();
  const updateCompletedStatus = useUpdateCompletedSetStatus();

  useEffect(() => {
    updateCompletedStatus(set);
    cardsList
      ? buildScryfallData(cardsList)
      : console.log(
          "CardsList não foi encontrada para buscar dados da api Scryfall"
        );
  }, [cardsList]);

  return (
    <div className={styles.container}>
      <CardsList cardsList={cardsList || []} />
    </div>
  );
};

export default SetPage;
