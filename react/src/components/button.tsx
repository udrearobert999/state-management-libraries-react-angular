import { ReactNode } from 'react';
import Spinner from './spinner';

import { cn } from '@/utils';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = ({ children, className, isLoading, onClick }: ButtonProps) => {
  const buttonClass = cn(
    'flex flex-1 items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition-all duration-100',
    isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700',
    className,
  );

  return (
    <button disabled={isLoading} onClick={onClick} className={buttonClass}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
