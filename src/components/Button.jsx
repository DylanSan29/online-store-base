import React from 'react';
import './Button.css'; // Optional for reusable button styles

const Button = ({ label, onClick, variant = "primary", disabled = false }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
