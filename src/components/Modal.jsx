import React from 'react';
import './Modal.css'; // Optional for modal styles

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-content">
          {children}
        </div>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
