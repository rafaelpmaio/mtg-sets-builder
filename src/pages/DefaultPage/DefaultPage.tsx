import { Outlet, useLocation } from "react-router-dom";
import styles from "./_defaultPage.module.scss";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import { useEffect } from "react";
import { useSetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useSetDropdownMenuOptions";
import { useGetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useGetDropdownMenuOptions";
import { getDropdownOptions } from "utils/getDropdownOptions";
import { totalSetCost } from "utils/totalSetCost";
import { totalInvested } from "utils/totalInvested";
import { useGetUpdatedSet } from "state/hooks/customHooks/useGetUpdatedSet";

const DefaultPage = () => {
  const setDropdownMenuOptions = useSetDropdownMenuOptions();
  const dropdownMenuOptions = useGetDropdownMenuOptions();
  const location = useLocation();
  
  const set = useGetUpdatedSet();

  useEffect(() => {
    setDropdownMenuOptions(getDropdownOptions(location.pathname));
  }, [location]);

  return (
    <>
      <main>
        <section className={styles.header}>
          <h2>{set?.name}</h2>
          <div>
            <p>
              Collected: {set?.collectedCardsTotal} /
              {set?.totalSetSize}
            </p>
            <p>Total Cost: US${set ? totalSetCost(set) : 'error'} </p>
            <p>Total Invested: US${set ? totalInvested(set) : 'error'}</p>
          </div>
        </section>
        <DropdownMenu options={dropdownMenuOptions} defaultOption={dropdownMenuOptions[0]} />
        <Outlet />
      </main>
    </>
  );
};

export default DefaultPage;
