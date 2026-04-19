// ✅ Server Component — solo renderiza UI sin hooks ni eventos
import './badge.css';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral';

interface BadgeProps {
    label: string;
    variant?: BadgeVariant;
}

export const Badge = ({ label, variant = 'neutral' }: BadgeProps) => {
    return(
        <span className={`badge badge-${variant}`}>
            {label}
        </span>
    )
}