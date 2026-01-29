import React, { useEffect, useRef } from "react";

export const AnimatedCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let angle = 0; // Angle for the gradient rotation
    const palette = [
      "rgb(11, 38, 89)",
      "rgb(97, 11, 121)",
      "rgb(16, 67, 159)",
      "rgb(37, 150, 190)",
      "rgb(228, 87, 46)",
      "rgb(223, 196, 64)",
      "rgb(52, 160, 95)",
      "rgb(160, 49, 70)",
      "rgb(122, 63, 191)",
      "rgb(18, 110, 130)",
    ];
    const pickColor = (exclude) => {
      let color = exclude;
      while (color === exclude) {
        color = palette[Math.floor(Math.random() * palette.length)];
      }
      return color;
    };
    const startColor = pickColor(null);
    const endColor = pickColor(startColor);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCircle = () => {
      const width = canvas.width;
      const height = canvas.height;
      const radius = Math.min(width, height) / 3; // Radius of the circle
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Create a gradient that rotates around the circle
      const gradient = ctx.createLinearGradient(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        centerX - Math.cos(angle) * radius,
        centerY - Math.sin(angle) * radius
      );
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(1, endColor);

      ctx.beginPath();
      ctx.lineWidth = 30; // Make the stroke thicker
      ctx.strokeStyle = gradient; // Apply the gradient to the stroke

      // Add shadow for fading edges
      ctx.shadowColor = startColor;
      ctx.shadowBlur = 100; // Blur effect for fading edges

      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      angle += 0.03; // Increment the angle for gradient rotation
    };

    const animate = () => {
      drawCircle();
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
