import styles from './CheckHero.module.scss'
import { HeroCheckProps } from '@/shared/types/types'


export const HeroCheck: React.FC<HeroCheckProps> = ({li1, li2, li3}) => {
    return (
        <div className={styles.check__items}>
            <ul className={styles.check__ul}>
                <li className={styles.check__li1}>{li1}</li>
                <li className={styles.check__li2}>{li2}</li>
                <li className={styles.check__li3}>{li3}</li>
            </ul>
        </div>
    )
}