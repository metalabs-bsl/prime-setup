'use client';
import { useEffect, useState } from 'react';
import styles from './Styles.module.scss';
import { useTranslations } from 'next-intl';

interface ToastProps {
  visible: boolean;
  onClose: () => void;
  type?: 'success' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ visible, onClose, type = 'success' }) => {
  const [show, setShow] = useState(visible);
  const t = useTranslations('Popup');

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
        onClose();
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  const toastText = type === 'success' ? t('success') : t('error');

  return show ? (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{toastText}</span>
    </div>
  ) : null;
};
