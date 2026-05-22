import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from './SpotlightCard';

type SpotlightColor = `rgba(${number}, ${number}, ${number}, ${number})`;

interface SpotlightButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  fullWidth = false
}) => {
  const isPrimary = variant === 'primary';
  const spotlightColor: SpotlightColor = isPrimary ? 'rgba(255, 255, 255, 0.35)' : 'rgba(244, 166, 34, 0.25)';
  const widthClass = fullWidth ? 'w-full block' : 'inline-block';
  const cardClass = [
    '!p-0 !rounded-lg transition-colors duration-300',
    isPrimary
      ? '!bg-[#F4A622] !border-transparent hover:!bg-[#F4A622]/90'
      : '!bg-transparent !border-[#F4A622]/40 hover:!border-[#F4A622]',
    widthClass,
    className
  ].join(' ');
  const sizeClass = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-6 py-3';
  const innerClass = `flex items-center justify-center w-full text-center font-medium ${sizeClass} ${isPrimary ? 'text-black' : 'text-[#F4A622]'}`;

  const card = (inner: ReactNode) => (
    <SpotlightCard className={cardClass} spotlightColor={spotlightColor}>
      {inner}
    </SpotlightCard>
  );

  if (to) {
    return (
      <Link to={to} className={widthClass}>
        {card(<span className={innerClass}>{children}</span>)}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={widthClass}>
        {card(<span className={innerClass}>{children}</span>)}
      </a>
    );
  }
  return card(
    <button type={type} onClick={onClick} className={innerClass}>
      {children}
    </button>
  );
};

export default SpotlightButton;
