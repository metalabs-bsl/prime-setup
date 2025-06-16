import { ContactUs } from '@/features/СontactUs/ContactUs';
import styles from './Footer.module.scss'
import mobile from './FooterMobile.module.scss'
import { Map } from '@/features/Map/Map';
import { FormFooter } from '../formFooter/FormFooter';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

export const Footer: React.FC = () => {
    const t = useTranslations('ContactUs');

    return (
        <>  
            <div className={styles.footer__up}>
                <Image className={styles.footer__up__bg} alt='Footer Background Up' src='/assets/images/FooterBgUp.svg' width={1393} height={427}/>
            </div>
            <footer className={`${styles.footer} ${mobile.footer}`}>
                <div className="container">
                    <div className={`${styles.footer__box} ${mobile.footer__box}`}>
                        <div className={styles.footer__up}>
                            <ContactUs/>
                            <FormFooter
                              pText={t("formDescription")}
                              name=""
                              email=""
                              number=""
                              message=""
                              className={styles.formContactUs}
                            />
                        </div>
                        <div className={styles.footer__map}>
                            <Map/>
                        </div>
                        <div className={styles.footer__bottom}>
                            <div className={styles.footer__line}></div>
                            <p className={styles.footer__protection}>{t("footerProtection")}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};