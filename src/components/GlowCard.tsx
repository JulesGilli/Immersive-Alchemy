import React, { type ReactNode } from 'react';
import BorderGlow from './BorderGlow';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', borderRadius = 16 }) => (
  <BorderGlow
    backgroundColor="#0a0a0a"
    glowColor="38 90 55"
    borderRadius={borderRadius}
    glowRadius={36}
    glowIntensity={1}
    edgeSensitivity={30}
    colors={['#F4A622', '#ffd27f', '#b3700f']}
  >
    <div className={className}>{children}</div>
  </BorderGlow>
);

export default GlowCard;
