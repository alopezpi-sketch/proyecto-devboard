// ✅ Client Component — Provider que maneja estado global de notificaciones y custom hook
'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import './Notification.css';

interface Notification {
  message: string;
}

interface NotificationContextType {
  notification: Notification | null;
  showNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string) => {
    setNotification({ message });

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}

      {notification && (
        <div className="notification">
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification debe usarse dentro de NotificationProvider');
  }

  return context;
};