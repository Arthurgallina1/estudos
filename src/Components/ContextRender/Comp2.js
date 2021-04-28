import React from 'react';
import { useTestContext, useTestContextTwo } from '../../LoginContext';
import useTraceUpdate from '../../utils/useTraceUpdates';

export default function ContextRender(props) {
  const { isSharing, setIsSharing } = useTestContextTwo();
  const { multipleState } = useTestContext();
  console.log('render comp 2 sharing');
  useTraceUpdate(props);

  return (
    <div>
      <h1>{isSharing ? 'Stop Sharing' : 'Start Sharing'} </h1>
      <button onClick={() => setIsSharing((prev) => !prev)}>
        Change Sharing
      </button>
    </div>
  );
}
