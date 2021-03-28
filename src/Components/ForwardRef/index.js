import React, { useEffect, useRef, forwardRef } from 'react';

export default function SimpleForwardRef() {
  const inputRef = React.useRef(null);

  const selectText = () => {
    // inputRef.current?.select();
    console.log(inputRef.current.value);
    return;
  };

  return (
    <div>
      <ForwardedInput ref={inputRef} placeholder="Type here" />
      <button onClick={selectText}>Select text</button>
    </div>
  );
}

const ForwardedInput = React.forwardRef(({ placeholder }, ref) => (
  <input ref={ref} placeholder={placeholder} />
));
