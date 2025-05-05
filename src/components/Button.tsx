import React from 'react';
import { ButtonProps } from '../types/Button';
import { Spinner } from './Spinner';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  as: Component = 'button',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100 focus:ring-blue-500',
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </Component>
  );
};

export default Button;
