// ✅ Server Component — solo renderiza UI sin hooks ni eventos
import React from "react";
import './badge.css';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const BadgeComponent = ({ label, variant = 'neutral' }: BadgeProps) => {
  console.log("render Badge:", label); //evidencia

  return (
    <span className={`badge badge-${variant}`}>
      {label}
    </span>
  );
};

export const Badge = React.memo(BadgeComponent);