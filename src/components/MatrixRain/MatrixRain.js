import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const MatrixRain = () => {

  const navigate = useNavigate();

  const canvasRef = useRef(null);
  const handleNavigate = () => {
    navigate('/AppMain');
    // navigate('/page2', { state: { someData: 'hello' } }); // with state
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters - taken from the Katakana charset
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    
    // Combine character sets
    const characterSet = chars + latin + nums;

    // Font size
    const fontSize = 16;
    
    // Calculate number of columns
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to keep track of the Y position of each drop
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Draw the characters
    const draw = () => {
      // Black background with opacity for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font and color
      ctx.fillStyle = '#0F0'; // Matrix green
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top when it reaches bottom with random chance
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };

    // Animation loop
    const intervalId = setInterval(draw, 33);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize);
      // Adjust drops array
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = 1;
        }
      } else if (newColumns < drops.length) {
        drops.length = newColumns;
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
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
        Enter Into The WEB-APPLICATION
      </button>
    </div>
  );
};

export default MatrixRain;