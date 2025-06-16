import { useState } from 'react';
import styles from './Language.module.scss';
import { useRouter, usePathname } from '@/shared/lib/i18n/navigation';
import { useLocale } from 'next-intl';

export const Language: React.FC = () => {
  const locale = useLocale(); 
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const currentLang = locale === 'en' ? 'En' : 'Ru';

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleChangeLang = (lang: 'En' | 'Ru') => {
    const newLocale = lang.toLowerCase(); 
    if (newLocale === locale) return; 
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className={styles.language}>
      <p className={styles.translate} onClick={toggleDropdown}>
        {currentLang}
        <span className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}></span>
      </p>

      {isOpen && (
        <div className={styles.dropdown}>
          {['En', 'Ru'].map(lang => (
            <button
              key={lang}
              className={`${styles.option} ${currentLang === lang ? styles.active : ''}`}
              onClick={() => handleChangeLang(lang as 'En' | 'Ru')}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
