import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MatrixRain = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const handleNavigate = () => {
    navigate('/AppMain');
  };

  useEffect(() => {
    // ... (existing matrix rain effect code remains the same)
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', background: 'black' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 1 
        }} 
      />
      
      <button 
        onClick={handleNavigate}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: 'black',
          color: '#0F0',
          border: '2px solid #0F0',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'monospace'
        }}
      >
        Enter the Matrix
      </button>
    </div>
  );
};

export default MatrixRain;