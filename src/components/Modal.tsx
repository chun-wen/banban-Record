import React, { useState } from 'react';

const Modal = () => {
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Click</button>
      <p>{number}</p>
    </>
  );
};

export default Modal;
