"use client";
import styles from './HeroButtons.module.scss'
import { Button } from "@/shared/ui/Buttons/Button/Button";
import { HeroButtonsProps } from "@/shared/types/types";

export const HeroButtons = ({ telegramText, whatsappText }: HeroButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <Button
        text={telegramText}
        onClick={() => console.log("Hi Telegram")}
        variant="telega"
        size="telegaSize"
      />
      <Button
        text={whatsappText}
        onClick={() => console.log("Hi WhatsApp")}
        variant="whatsApp"
        size="whatsAppSize"
      />
    </div>
  );
};
