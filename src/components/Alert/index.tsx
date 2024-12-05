import React from 'react';
import styles from './Alert.module.css';

interface AlertProps {
  message: string;
  type?: 'error';
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ 
  message, 
  type = 'error',
  onClose 
}) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`} data-testid='alert'>
      <p>{message}</p>
      {onClose && (
        <button 
          onClick={onClose}
          className={styles.closeButton}
          aria-label='Close alert'
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
