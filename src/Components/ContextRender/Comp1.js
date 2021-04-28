import React from 'react';
import { useTestContext } from '../../LoginContext';

export default function ContextRender() {
  const { isSelecting, setIsSelecting } = useTestContext();

  console.log('render comp 1 selecting');

  return (
    <div>
      <h1>{isSelecting ? 'Stop Selecting' : 'Start Selecting'} </h1>
      <button onClick={() => setIsSelecting((prev) => !prev)}>
        Change Selecting
      </button>
    </div>
  );
}
