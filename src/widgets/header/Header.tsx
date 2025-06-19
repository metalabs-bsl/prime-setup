"use client";
import { Button } from "@/shared/ui/Buttons/Button/Button";
import styles from "./Header.module.scss";
import mobile from "./HeaderMobile.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language } from "../language/Language";
import { useTranslations } from "next-intl";

export const Header: React.FC = () => {
  const navigation = useRouter();
  const t = useTranslations("Header");

  return (
    <header className={`${styles.header} ${mobile.header}`}>
      <div className="container">
        <div className={`${styles.header__box} ${mobile.header__box}`}>
          <Image
            src="/assets/icons/Logo.svg"
            onClick={() => navigation.push("/")}
            className={`${styles.header__logo} ${mobile.header__logo}`}
            alt="Header Logo"
            width={204}
            height={82}
          />

          <div className={`${styles.header__right} ${mobile.header__right}`}>
            <Language />
            <div className={`${styles.header__btn} ${mobile.header__btn}`}>
              <a href="tel:+971 52 167 2443">
                <Button
                  text={"+971 52 167 2443"}
                  variant="number"
                  size="requestSize"
                />
              </a>
              <Button
                onClick={() => {
                  const footer = document.getElementById("footer");
                  footer?.scrollIntoView({ behavior: "smooth" });
                }}
                text={t("btn2")}
                variant="request"
                size="requestSize"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
