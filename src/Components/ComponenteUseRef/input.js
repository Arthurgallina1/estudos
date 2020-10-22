import React, { forwardRef } from 'react';

const Input = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...rest} />
    </div>
  );
};

export default forwardRef(Input);
