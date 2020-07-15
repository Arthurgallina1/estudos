import React, { useRef } from 'react';

export default function C5() {
  const Firstref = useRef();
  const Snref = useRef();
  const Ref = useRef();

  function onClick(ref) {
    console.log(ref);
    ref.current.focus();
    ref.current.value = 10;
    Ref.current.submit();
  }

  return (
    <form
      ref={Ref}
      style={{ display: 'flex', flexDirection: 'column', background: 'grey' }}
    >
      <input type="text" name="nome" className="input" />

      <big onClick={() => onClick(Snref)}>Next</big>
      <input ref={Snref} type="text" name="age" />

      <big onClick={() => onClick(Firstref)}>Next</big>
      <input ref={Firstref} type="text" name="xis" />
    </form>
  );
}
