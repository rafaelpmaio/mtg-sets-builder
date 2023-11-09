import Card from "./Card/Card";
import styles from "./_cardList.module.scss";
import { useGetScryfallCardsData } from "state/hooks/stateHooks/scryfallCardsDataState/useGetScryfallCardsData";
import ICard from "interfaces/ICard";

interface cardsListProps {
  cardsList: ICard[];
}

const CardsList = ({ cardsList }: cardsListProps) => {
  return (
    <ul className={styles.list}>
      {cardsList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default CardsList;
