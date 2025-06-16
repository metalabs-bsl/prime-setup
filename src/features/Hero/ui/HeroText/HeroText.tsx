import styles from "./HeroText.module.scss";
import { HeroTextProps } from "@/shared/types/types";

export const HeroText: React.FC<HeroTextProps> = ({ h1Text, pText }) => {
  return (
    <div className={styles.heroLeft__text}>
      <h1>{h1Text}</h1>
      <p>{pText}</p>
    </div>
  );
};
