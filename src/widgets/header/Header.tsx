"use client"
import { Button } from '@/shared/ui/Buttons/Button/Button'
import styles from './Header.module.scss'
import mobile from './HeaderMobile.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Language } from '../language/Language'
import { useTranslations } from 'next-intl'

export const Header: React.FC = () => {

    const navigation = useRouter()
    const t = useTranslations('Header');

    return (
        <header className={`${styles.header} ${mobile.header}`}>
            <div className="container">
                <div className={`${styles.header__box} ${mobile.header__box}`}>

                    <Image 
                      src='/assets/icons/Logo.svg' 
                      onClick={() => navigation.push("/")}
                      className={`${styles.header__logo} ${mobile.header__logo}`} 
                      alt='Header Logo'
                      width={204} 
                      height={82}
                    />

                    <div className={`${styles.header__right} ${mobile.header__right}`}>
                        <Language/>
                        <div className={`${styles.header__btn} ${mobile.header__btn}`}>
                            <Button
                              text={'+996507695369'} 
                              onClick={() => console.log('Hi')}
                              variant="number" 
                              size="requestSize"
                            />
                            <Button
                              text={t('btn2')} 
                              onClick={() => console.log('Hi')}
                              variant="request" 
                              size="requestSize"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}