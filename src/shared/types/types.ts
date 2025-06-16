export interface ButtonProps {
    text: string | boolean;
    onClick?: () => void;
    variant?: 'request' | 'number' | 'corner' | 'start' | 'telega' | 'whatsApp';
    size?: 'requestSize' | 'requestSize' | 'cornerSize' | 'startSize' | 'telegaSize' | 'whatsAppSize';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface PropsMenu {
    isOpen: boolean;
    onClose: () => void;
}

export interface TelegramButtonProps{
    text: string | boolean;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}
  
export interface WorkItemProps {
    imgSrc: string
    imgAlt?: string
    imgWidth: number
    imgHeight: number
    title: string
    text: string
}

export interface QuestionsItemProps {
    question: string
    answer: string
}

export interface BusinessCardProps {
  title: string;
  price: string;
  checks: string[];
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface WayCardProps {
    number: string
    text: string
}

export interface LogoProps {
    onClick?: () => void;
}

interface Review {
  id: number;
  title: string;
  text: string;
  image: string;
  stars?: number;
}

export interface ReviewSwiperProps {
  reviews: Review[];
}


export interface FormHeroProps {
  pText: string;
  name: string;
  email: string;
  number?: string;
  message: string;
  className?: string;
}

export interface HeroTextProps {
  h1Text: string;
  pText: string;
}

export interface AchievementsProps {
  li1First: string;
  li1Second: string;
  li2First: string;
  li2Second: string;
  li3Second: string;
}

export interface HeroButtonsProps {
  telegramText: string;
  whatsappText: string;
};

export interface BusinessButtonsProps {
  businessText: string;
};

export interface WorkUsButtonsProps {
  workUsText: string;
};

export interface HeroCheckProps {
  li1: string
  li2: string
  li3: string
}
