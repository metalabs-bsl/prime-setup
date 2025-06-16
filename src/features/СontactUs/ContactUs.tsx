import styles from './ContactUs.module.scss'
import Image from 'next/image'
import { ContactUsSvg } from './ui/ContactUsSvg/ContactUsSvg'
import { useTranslations } from 'next-intl'

export const ContactUs: React.FC = () => {
    const t = useTranslations('ContactUs');

    return (
        <div className={styles.contactUs}>
            <div className={styles.contactUs__up}>
                <Image className={styles.contactUs__logo} alt='Footer Logo' src='/assets/icons/FooterLogo.svg' width={374} height={137}/>
                <p className={styles.contactUs__text}>{t("officeAddressMobileUP")}</p>
            </div>
            <div className={styles.contactUs__box}>
                <div className={styles.contactUs__items}>
                    <div className={styles.item1}>
                        <h3 className={styles.item1__title}>{t("officeAddress")}</h3>
                        <p className={styles.items1__text}>{t("officeAddressText1")}</p>
                    </div>
                    <div className={styles.item2}>
                        <h3 className={styles.item2__title}>{t("workingHours")}</h3>
                        <p className={styles.items2__text}>{t("workingHoursText1")}</p>
                    </div>
                    <div className={styles.item3}>
                        <h3 className={styles.item3__title}>{t("contactUs")}</h3>
                        <div className={styles.item3__call}>
                            <a className={styles.item3__call__link1} href="mailto:info@primesetupuae.com">info@primesetupuae.com</a>
                            <a className={styles.item3__call__link2} href="tel:+996504476924">+996 504 476-924</a>
                        </div>
                    </div>
                </div>
                <div className={styles.contactUs}>
                    <ContactUsSvg/>
                </div>
            </div>
        </div>
    )
};