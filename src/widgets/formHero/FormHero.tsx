"use client";
import { useState, useCallback, memo, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-phone-number-input/style.css";
import "./FormHero.scss";
import { FormHeroProps } from "@/shared/types/types";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";
import { Country } from "react-phone-number-input";
import { Toast } from "@/shared/ui/Toast";



const PhoneInput = dynamic(
  () => import("react-phone-number-input").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <input type="tel" placeholder="Loading phone input..." />,
  }
);

export const FormHero: React.FC<FormHeroProps> = memo(function FormHero({
  pText,
  name: initialName,
  email: initialEmail,
  number: initialNumber,
  message: initialMessage,
  className,
}) {
  const t = useTranslations("FormHero");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState<string | undefined>(initialNumber);
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [userCountry, setUserCountry] = useState<string | undefined>();
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("error");


  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setUserCountry(data.country_code); // типа "KG"
        }
      })
      .catch((err) => console.error("GeoIP error", err));
  }, []);


  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePhoneChange = useCallback((value?: string) => {
    setPhone(value);
  }, []);

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const handleRecaptchaChange = useCallback((value: string | null) => {
    setRecaptchaValue(value);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!recaptchaValue) {
        alert(t("recaptchaError"));
        return;
      }

      setIsSubmitting(true);

      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            recaptcha: recaptchaValue,
          }),
        });
        
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setRecaptchaValue(null);
        setToastType("success");
        setShowToast(true);
      } catch (error) {
        console.error("Error:", error);
        setToastType("error");
        setShowToast(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, email, phone, message, recaptchaValue, t]
  );

  return (
    <>
      <Toast
        visible={showToast}
        type={toastType}
        onClose={() => setShowToast(false)}
      />
    <form id='heroForm' className={`formHero ${className}`} onSubmit={handleSubmit}>
      <p className="formHero__description">{pText}</p>

      <div className="formHero__formGroup">
        <input
          type="text"
          id="name"
          placeholder={t("name")}
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className="formHero__formGroup">
        <input
          type="email"
          id="email"
          placeholder={t("email")}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className="formHero__formGroup">
        <PhoneInput
          international
          defaultCountry={userCountry as Country}
          value={phone}
          onChange={handlePhoneChange}
          placeholder={t("number")}
        />
      </div>

      <div className="formHero__formGroup textareaFormGroup">
        <textarea
          id="message"
          value={message}
          placeholder={t("message")}
          onChange={handleMessageChange}
          rows={4}
        />
      </div>

      <div className="formHero__formGroup">
        <ReCAPTCHA
          sitekey="6LfP8GQrAAAAAPzMUVbjxGiJJFXv9B8aHwfnVzCD"
          onChange={handleRecaptchaChange}
        />
	
      </div>

      <button
        type="submit"
        className="formHero__button"
        disabled={isSubmitting || !recaptchaValue}
      >
        {isSubmitting ? t("sending") : t("send")}
      </button>
    </form>
    </>
  );
});