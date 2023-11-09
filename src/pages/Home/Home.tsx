import SetsList from "./SetsList/SetsList";
import styles from "./_home.module.scss";
import { useEffect } from "react";
import { useBuildSetsList } from "state/hooks/customHooks/builders/useBuildSetsList";

const Home = () => {
  const buildSets = useBuildSetsList();

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
