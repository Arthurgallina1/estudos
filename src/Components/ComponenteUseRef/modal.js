import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';

import './style.css';

const Modal = ({}, ref) => {
  const [visible, setVisible] = useState(true);

  const overlay = visible ? 'active' : '';
  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  const handleModalState = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { handleOpenModal, handleModalState };
  });

  if (!visible) {
    return null;
  }
  return (
    <div className={`overlay ${overlay}`}>
      <div className="modal">
        <h1>modalAberto</h1>
        <button type="button" onClick={handleCloseModal}>
          Fecha modal
        </button>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
