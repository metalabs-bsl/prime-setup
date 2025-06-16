import styles from './Business.module.scss'
import mobile from './BusinessMobile.module.scss'
import { BusinessCard } from './ui/BusinessCard/BusinessCard'
import { useTranslations } from 'next-intl'

export const Business: React.FC = () => {
    const t = useTranslations('Business');

    const business = [
      { title: t("title1Business"), price: t("price1Business"), checks: [ t("check1Business1"), t("check1Business2"), t("check1Business3"), t("check1Business4"), t("check1Business5"), t("check1Business6"), t("check1Business7") ] },
      { title: t("title2Business"),price: t("price2Business"),checks: [ t("check2Business1"),  t("check2Business2"),  t("check2Business3"),  t("check2Business4"),  t("check2Business5"),  t("check2Business6"),  t("check2Business7"),  t("check2Business8") ] },
      { title: t("title3Business"), price: t("price3Business"), checks: [  t("check3Business1"),   t("check3Business2"),   t("check3Business3"),   t("check3Business4"),   t("check3Business5"),   t("check3Business6") ] },
    ];


    return (
        <section className={`${styles.business} ${mobile.business}`}>
            <div className="container">
                <div className={`${styles.business__box} ${mobile.business__box}`}>
                    <div className={`${styles.business__up} ${mobile.business__up}`}>
                        <h2 className={`${styles.business__title} ${mobile.business__title}`}>{t("h2Business")}</h2>
                        <p className={`${styles.business__text} ${mobile.business__text}`}>{t("pBusiness")}</p>
                    </div>
                    <div className={`${styles.business__items} ${mobile.business__items}`}>
                        {business.map((el, idx) => (
                          <BusinessCard
                            key={idx}
                            title={el.title}
                            price={el.price}
                            checks={el.checks}
                          />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}