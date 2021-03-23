import React from 'react';
import ErrorComp from '../ErrorBoundaries';
import ErrorBoundaries from '../Comp6Error/Boundaries';

export default function Comp6Error() {
  return (
    <div>
      <ErrorBoundaries>
        <ErrorComp name="codebuckss" />
      </ErrorBoundaries>
    </div>
  );
}
