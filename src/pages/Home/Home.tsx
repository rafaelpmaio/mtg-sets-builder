import SetsList from "./SetsList/SetsList";
import styles from "./_home.module.scss";
import { useEffect } from "react";
import { useSetsListBuilder } from "state/hooks/setsListBuilder/useSetsListBuilder";

const Home = () => {
  const buildSets = useSetsListBuilder();

  useEffect(() => {
      buildSets();
}, [])

  return (
    <div className={styles.container}>
      <SetsList />
    </div>
  );
};

export default Home;
