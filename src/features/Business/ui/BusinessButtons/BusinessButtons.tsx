"use client";
import { Button } from "@/shared/ui/Buttons/Button/Button";
import { BusinessButtonsProps } from "@/shared/types/types";

export const BusinessButtons = ({ businessText }: BusinessButtonsProps) => {
  return (
        <Button
          text={businessText}
          onClick={() => {
            const section = document.getElementById("heroRight");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          variant="start" 
          size="startSize"
        />
  );
};