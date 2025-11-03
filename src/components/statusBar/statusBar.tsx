import { Button } from "../index";
import UseStatusBarHooks from "./statusBar.hooks";

//icons
import wifiOnIcon from "../../assets/icons/wifi-on-icon.svg";
import wifiOffIcon from "../../assets/icons/wifi-off-icon.svg";
import refreshIcon from "../../assets/icons/refresh-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";

import styles from "./statusBar.module.scss";

const StatusBar: React.FC = () => {
  const { handleRefresh, formatDate, lastUpdated } = UseStatusBarHooks();

  return (
    <div className={styles["status-bar"]}>
      <Button
        label={navigator.onLine ? "Online" : "Offline"}
        iconSrc={navigator.onLine ? wifiOnIcon : wifiOffIcon}
        color="rgba(0, 130, 54, 1)"
      />
      <div className={styles["last-update"]}>
        <img src={clockIcon} />
        Last updated:{" "}
        {lastUpdated ? formatDate(lastUpdated) : "Not updated yet"}
      </div>
      <Button
        label="Refresh rates"
        onClick={() => {
          handleRefresh();
        }}
        iconSrc={refreshIcon}
        color="rgba(20, 71, 230, 1)"
      />
    </div>
  );
};

export default StatusBar;
