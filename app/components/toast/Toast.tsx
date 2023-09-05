'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`
        absolute
        bottom-5
        right-5
        px-4
        py-2
        rounded-md
        shadow-md
        text-white
        ${type === 'success' && 'bg-green-500'}
        ${type === 'error' && 'bg-red-500'}
        ${type === 'info' && 'bg-blue-500'}
        ${type === 'warning' && 'bg-yellow-500'}
      `}
    >
      {message}
    </div>
  );
};

export default Toast;
