import styles from './Way.module.scss'
import mobile from './WayMobile.module.scss'
import { WayCard } from './ui/WayCard/WayCard'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const Way: React.FC = () => {
    const t = useTranslations('Way')

    const way = [
        { number: '1', text: t("text1Way") },
        { number: '2', text: t("text2Way") },
        { number: '3', text: t("text3Way") },
        { number: '4', text: t("text4Way") },
        { number: '5', text: t("text5Way") }
    ];

    const lines = [
        { src: '/assets/images/WayLine1.svg', className: `${styles.way__line1} ${mobile.way__line1}`, height: 54 },
        { src: '/assets/images/WayLine2.svg', className: `${styles.way__line2} ${mobile.way__line2}`, height: 54 },
        { src: '/assets/images/WayLine3.svg', className: `${styles.way__line3} ${mobile.way__line3}`, height: 54 },
        { src: '/assets/images/WayLine3.svg', className: `${styles.way__line4} ${mobile.way__line4}`, height: 28 },
        { src: '/assets/images/WayLine3.svg', className: `${styles.way__line5} ${mobile.way__line5}`, height: 28 },
        { src: '/assets/images/WayLine3.svg', className: `${styles.way__line6} ${mobile.way__line6}`, height: 28 },
        { src: '/assets/images/WayLine3.svg', className: `${styles.way__line7} ${mobile.way__line7}`, height: 28 },
    ];


    return (
        <section className={`${styles.way} ${mobile.way}`}>
            {lines.map((el, idx) => (
                <Image
                    key={idx}
                    className={el.className}
                    alt={`line${idx + 1}`}
                    src={el.src}
                    width={0}
                    height={el.height}
                    priority
                />
            ))}

            <div className="container">
                <div className={`${styles.way__box} ${mobile.way__box}`}>
                    <div className={`${styles.way__in} ${mobile.way__in}`}>
                        <div className={`${styles.way__in__up} ${mobile.way__in__up}`}>
                            <h2 className={`${styles.way__title} ${mobile.way__title}`}>{t("h2Way")}</h2>
                            <p className={`${styles.way__text} ${mobile.way__text}`}>{t("pWay")}</p>
                        </div>
                        <div className={`${styles.way__items} ${mobile.way__items}`}>
                            {way.map((el, idx) => (
                                <WayCard
                                    key={idx}
                                    number={el.number}
                                    text={el.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
