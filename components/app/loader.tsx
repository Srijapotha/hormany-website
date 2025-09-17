import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p aria-live="polite">LOADING...</p>
    </div>
  );
}

export default Loader;