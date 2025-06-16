import styles from "./Achievements.module.scss";
import { AchievementsProps } from "@/shared/types/types";

export const Achievements: React.FC<AchievementsProps> = ({
  li1First,
  li1Second,
  li2First,
  li2Second,
  li3Second,
}) => {

  return (

    <div className={styles.achievements}>
        <div className={styles.achievements__item1}>
          <h5 className={styles.item1__title}>{li1First}</h5>
          <p className={styles.item1__text}>{li1Second}</p>
        </div>
        <div className={styles.achievements__item2}>
          <h5 className={styles.item2__title}>{li2First}</h5>
          <p className={styles.item2__text}>{li2Second}</p>
        </div>
        <div className={styles.achievements__item3}>
          <p className={styles.item3__text}>{li3Second}</p>
        </div>
    </div>
  );
};