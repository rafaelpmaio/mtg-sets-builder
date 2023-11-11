import { Outlet, useLocation } from "react-router-dom";
import styles from "./_defaultPage.module.scss";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import { useEffect } from "react";
import { useSetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useSetDropdownMenuOptions";
import { useGetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useGetDropdownMenuOptions";
import { getDropdownOptions } from "utils/getDropdownOptions";
import { totalInvested } from "utils/totalInvested";
import { useGetUpdatedSet } from "state/hooks/customHooks/useGetUpdatedSet";
import { totalSetCost } from "utils/totalSetCost";
import { useGetScryfallData } from "state/hooks/stateHooks/scryfallDataState/useGetScryfallData";

const DefaultPage = () => {
  const setDropdownMenuOptions = useSetDropdownMenuOptions();
  const dropdownMenuOptions = useGetDropdownMenuOptions();
  const location = useLocation();

  const set = useGetUpdatedSet();
  const scryfallData = useGetScryfallData();

  useEffect(() => {
    setDropdownMenuOptions(getDropdownOptions(location.pathname));
  }, [location]);

  return (
    <>
      <main>
        <section className={styles.header}>
          <h2 className={styles.set_name}>{set?.name}</h2>
          <div className={styles.set_infos}>
            <p>
              Collected: {set?.collectedCardsTotal} /{set?.totalSetSize}
            </p>
            <p>Total Cost: US${set ? totalSetCost(set, scryfallData) : "0"} </p>
            <p>Total Invested: US${set ? totalInvested(set) : "0"}</p>
          </div>
          <DropdownMenu
            options={dropdownMenuOptions}
            defaultOption={dropdownMenuOptions[0]}
          />
        </section>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultPage;
