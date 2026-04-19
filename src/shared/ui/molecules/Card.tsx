// ✅ Server Component — solo renderiza UI sin hooks ni eventos
import React from 'react';
import './card.css';

interface CardProps {
    title?: string;
    children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}