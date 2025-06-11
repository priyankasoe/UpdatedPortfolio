import React, { useEffect, useRef } from "react";

export const SineWaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let hue = 0;
    let inc = 0; 

    let strokeColor = {
        h: 258,
        s: 97,
        l: 60,
        a: 0.2
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawSineWave = () => {
      const width = canvas.width;
      const height = canvas.height;
      const amplitude = height / 3; // Height of the wave
      const frequency = 0.002; // Frequency of the wave
      const speed = 0.005; // Speed of the wave
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = `hsl(${hue}, 70%, 50%)`;
    //   ctx.shadowColor = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${Math.abs(strokeColor.l * Math.sin(increment))}%)`;
    //   ctx.shadowBlur = 20;

      for (let x = 0; x < width; x++) {
        // const y = centerY + amplitude * Math.sin(frequency * x + hue * speed);
        // ctx.lineTo(x, y);

        ctx.lineTo(x, centerY + Math.sin(hue * speed + frequency * x) * amplitude * Math.sin(inc))
      }

      ctx.stroke();
      inc += frequency;
      hue += 1; // Increment hue for color change
    };

    const animate = () => {
      drawSineWave();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    ></canvas>
  );
};