import ICard from "interfaces/ICard";
import styles from "./_card.module.scss";
import Checkbox from "components/Checkbox/Checkbox";
import { useToggleCardCollectStatus } from "state/hooks/customHooks/useToggleCardCollectStatus";
import { Link } from "react-router-dom";
import { useGetScryfallCard } from "state/hooks/customHooks/useGetScryfallCard";
import { getValueWithKey } from "utils/getValueWithKey";

interface CardProps {
  card: ICard;
}

const Card = ({ card }: CardProps) => {
  const toggleCardCollectStatus = useToggleCardCollectStatus();
  const scryfallCard = useGetScryfallCard(card);

  console.log('teste')
  const imageSmall = getValueWithKey("small", scryfallCard?.images);
  const priceUsd = getValueWithKey("usd", scryfallCard?.prices);

  return (
    <li
      className={`${styles.card}  ${
        !card.isCollected ? styles.uncollected : ""
      }`}
    >
      <Link to={card.tcgLink ? card.tcgLink : ""}>
        <img src={imageSmall} alt={card.name} />
      </Link>
      <div>
        <p>nº: {card.number}</p>
        <p>
          <b className={styles.highlight}>{card.name}</b>
        </p>
        <p>
          Current Price: US${" "}
          <b className={styles.highlight}>{priceUsd ? priceUsd : "0"}</b>
        </p>
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
