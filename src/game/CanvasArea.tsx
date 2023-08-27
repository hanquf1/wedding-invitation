import { useEffect, useRef } from 'react';

export function CanvasArea() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log('canvas', canvas);
    if (canvas) {
      console.log('canvas', canvas);
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = window.innerWidth - 100;
      canvas.height = window.innerHeight - 100;

      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 100);
    }
  }, [ canvasRef ]);

  return (
    <div>
      <canvas ref={canvasRef} id='canvas' />
    </div>
  );
}