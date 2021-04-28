import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export default function ContextRender() {
  console.log('render comp pai');

  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  );
}
