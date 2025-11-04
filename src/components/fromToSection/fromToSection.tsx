import styles from "./fromToSection.module.scss";
import { useState } from "react";
import { FromToInput } from "../index";
import switchIcon from "../../assets/icons/switch-icon.svg";

const FromToSection: React.FC = () => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  return (
    <div className={styles["from-to-section"]}>
      {!isSwapped ? (
        <>
          <FromToInput setIsSwapped={setIsSwapped} label={"From"} />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput setIsSwapped={setIsSwapped} label={"To"} />
        </>
      ) : (
        <>
          <FromToInput setIsSwapped={setIsSwapped} label={"To"} />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput setIsSwapped={setIsSwapped} label={"From"} />
        </>
      )}
    </div>
  );
};

export default FromToSection;
