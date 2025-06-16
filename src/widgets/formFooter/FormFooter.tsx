"use client";
import { useState, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import "react-phone-number-input/style.css";
import "./FormFooter.scss";
import { FormHeroProps } from "@/shared/types/types";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";

const PhoneInput = dynamic(
  () => import("react-phone-number-input").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <input type="tel" placeholder="Loading phone input..." />,
  }
);

export const FormFooter: React.FC<FormHeroProps> = memo(function FormFooter({
  pText,
  name: initialName = "",
  email: initialEmail = "",
  number: initialNumber = "",
  message: initialMessage = "",
  className = "",
}) {
  const t = useTranslations("FormFooter");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState<string | undefined>(initialNumber);
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

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
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, email, phone, message, recaptchaValue, t]
  );

  return (
    <form className={`formFooter ${className}`} onSubmit={handleSubmit}>
      <h3 className="formFooter__description">{pText}</h3>

      <div className="formFooter__formGroup">
        <input
          type="text"
          id="name"
          placeholder={t("name")}
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className="formFooter__formGroup">
        <input
          type="email"
          id="email"
          placeholder={t("email")}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className="formFooter__formGroup">
        <PhoneInput
          international
          value={phone}
          onChange={handlePhoneChange}
          placeholder={t("number")}
        />
      </div>

      <div className="formFooter__formGroup textareaFormGroup">
        <textarea
          id="message"
          value={message}
          placeholder={t("message")}
          onChange={handleMessageChange}
          rows={4}
        />
      </div>

      <div className="formFooter__formGroup">
        <ReCAPTCHA
          sitekey="6LfBPFsrAAAAAGQJlcm5RJgvkJxAIJYSgVxNYvCd" 
          onChange={handleRecaptchaChange}
        />
      </div>

      <button
        type="submit"
        className="formFooter__button"
        disabled={isSubmitting || !recaptchaValue}
      >
        {isSubmitting ? t("sending") : t("send")}
      </button>
    </form>
  );
});