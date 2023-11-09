import ICard from "interfaces/ICard";
import styles from "./_card.module.scss";
import Checkbox from "components/Checkbox/Checkbox";
import { useToggleCardCollectStatus } from "state/hooks/customHooks/useToggleCardCollectStatus";
import { Link } from "react-router-dom";
import { useGetScryfallCard } from "state/hooks/customHooks/useGetScryfallCard";

interface CardProps {
  card: ICard;
}

const Card = ({ card }: CardProps) => {
  const toggleCardCollectStatus = useToggleCardCollectStatus();
  const scryfallCard = useGetScryfallCard(card);

  return (
    <li className={styles.card}>
      <Link to={card.tcgLink ? card.tcgLink : ""}>
        <img src={scryfallCard?.image} alt={`${card.name}`} />
      </Link>
      <div>
        <p>nº: {card.number}</p>
        <p>{card.name}</p>
        <p>Current Price: US$ {scryfallCard?.currentPrice}</p>
      </div>
      <Checkbox
        checkToggleFunction={(checkStatus) =>
          toggleCardCollectStatus(card, checkStatus)
        }
      >
        Collected
      </Checkbox>
    </li>
  );
};

export default Card;
