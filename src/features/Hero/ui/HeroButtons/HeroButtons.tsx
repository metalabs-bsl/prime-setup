"use client";
import styles from "./HeroButtons.module.scss";
import { Button } from "@/shared/ui/Buttons/Button/Button";
import { HeroButtonsProps } from "@/shared/types/types";

export const HeroButtons = ({
  telegramText,
  whatsappText,
}: HeroButtonsProps) => {
  const phone = "971521672443"; 
  const whatsappLink = `https://wa.me/${phone}`;
  const telegramLink = `https://t.me/${phone}`; 

  return (
    <div className={styles.buttons}>
      <a href={telegramLink} target="_blank" rel="noopener noreferrer">
        <Button text={telegramText} variant="telega" size="telegaSize" />
      </a>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button text={whatsappText} variant="whatsApp" size="whatsAppSize" />
      </a>
    </div>
  );
};
