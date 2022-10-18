import React from 'react';
export const Controls = ({ step, increment, decrement }) => (
  <div>
    <button type="button" onClick={increment}>
      Increment by {step}
    </button>
    <button type="button" onClick={decrement}>
      Decrement by {step}
    </button>
  </div>
);
