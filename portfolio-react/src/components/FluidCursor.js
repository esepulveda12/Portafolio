import { useEffect } from 'react';
import fluidCursor from '../hooks/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    const myFluidCursor = fluidCursor();
    if (myFluidCursor) {
        myFluidCursor.init();
    }
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    >
      <canvas
        id="fluid"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default FluidCursor;
