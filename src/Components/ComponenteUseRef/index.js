import React, { useRef, useEffect, useCallback } from 'react';

export default function ComponenteUseRef() {
  const nameInputRef = useRef(null);
  const acepptTermsRef = useRef({ value: false });

  useEffect(() => {}, []);

  // Com refs da pra fazer o input ser uncontrolled
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    nameInputRef.current.focus();
    console.log(nameInputRef.current.value);
    console.log(acepptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acepptTermsRef.current.value = !acepptTermsRef.current.value;
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite nome" ref={nameInputRef} />
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleAcceptTerms}>
          Aceitar
        </button>
      </form>
    </div>
  );
}
