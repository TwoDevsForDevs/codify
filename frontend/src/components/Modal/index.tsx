import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import './styles.css';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      isOpen={modalStatus}
      onRequestClose={setIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#191919',
          borderRadius: 16,
          border: 'none',
          overflow: 'hidden',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
