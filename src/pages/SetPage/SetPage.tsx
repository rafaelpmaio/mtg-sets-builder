import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import CardsList from "./CardsList/CardList";
import styles from "./_setPage.module.scss";
import { useBuildScryfallData } from "state/hooks/customHooks/builders/useBuildScryfallData";
import { useEffect } from "react";

const SetPage = () => {
  const cardsList = useGetFilteredCardsList();
  const buildScryfallData = useBuildScryfallData();

  useEffect(() => {
    cardsList
    ? buildScryfallData(cardsList)
    : console.log('CardsList não foi encontrada para buscar dados da api Scryfall');
  }, [cardsList]);

  return (
    <div className={styles.container}>
      <CardsList cardsList={cardsList || []} />
    </div>
  );
};

export default SetPage;
