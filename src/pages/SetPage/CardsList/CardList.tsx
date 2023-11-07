import Card from "./Card/Card";
import styles from "./_cardList.module.scss";
import { useGetScryfallData } from "state/hooks/cardAtributtesHooks/useGetScryfallData";
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
