import { getTranslations } from "next-intl/server";
import styles from "./Hero.module.scss";
import mobile from "./HeroMobile.module.scss";
import { HeroText } from "./ui/HeroText/HeroText";
import { Achievements } from "./ui/Achievements/Achievements";
import { FormHero } from "@/widgets/formHero/FormHero";
import { HeroButtons } from "./ui/HeroButtons/HeroButtons";
import Image from "next/image";
import { HeroCheck } from "./ui/CheckHero/CheckHero";

export const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section id="hero" className={`${styles.hero} ${mobile.hero}`}>
      <div className={`${styles.hero__bg} ${mobile.hero__bg}`}>
        <Image
          src="/assets/images/HeroBg.webp"
          alt="Hero Background"
          fill
          priority
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="container">
        <div className={`${styles.hero__box} ${mobile.hero__box}`}>
          <div className={`${styles.heroLeft} ${mobile.heroLeft}`}>
            <div className={`${styles.hero__box__text} ${mobile.hero__box__text}`}>
              <HeroText h1Text={t("h1")} pText={t("p")} />
            </div>

            <HeroButtons
              telegramText={t("telegram")}
              whatsappText={t("whatsapp")}
            />

            <HeroCheck
              li1={t("LiCheck1")}
              li2={t("LiCheck2")}
              li3={t("LiCheck3")}
            />

            <Achievements
              li1First={t("li1First")}
              li1Second={t("li1Second")}
              li2First={t("li2First")}
              li2Second={t("li2Second")}
              li3Second={t("li3Second")}
            />
          </div>

          <div className={`${styles.heroRight} ${mobile.heroRight}`} id="heroRight">
            <FormHero
              pText={t("formDescription")}
              name=""
              email=""
              number=""
              message=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
