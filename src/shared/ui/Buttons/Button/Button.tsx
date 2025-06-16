import './Button.scss';
import { ButtonProps } from '@/shared/types/types';
  
export const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'card', 
  size = 'cardSize', 
  disabled = false,
  type = 'button',
}) => {
  return (
    <button 
    className={`Button ${variant} ${size}`}  
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  ) 
};