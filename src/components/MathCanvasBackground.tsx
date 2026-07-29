import React, { useEffect, useRef } from "react";

interface MathSymbol {
  x: number;
  y: number;
  text: string;
  speedX: number;
  speedY: number;
  opacity: number;
  size: number;
  angle: number;
  angularSpeed: number;
}

export const MathCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const formulas = [
      "E = mc²",
      "F = m·a",
      "Δ = b² - 4ac",
      "∫ f(x)dx",
      "sin²α + cos²α = 1",
      "v = v₀ + a·t",
      "λ = v / f",
      "W = F·s·cos α",
      "y = ax² + bx + c",
      "E_k = ½m·v²",
      "f'(x) = lim Δy/Δx",
      "PV = nRT",
    ];

    const symbols: MathSymbol[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: formulas[Math.floor(Math.random() * formulas.length)],
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.3 - 0.15,
      opacity: 0.12 + Math.random() * 0.2,
      size: 13 + Math.random() * 6,
      angle: (Math.random() - 0.5) * 0.2,
      angularSpeed: (Math.random() - 0.5) * 0.002,
    }));

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw dynamic geometric vector circles & sine waves
      ctx.strokeStyle = "rgba(37, 99, 235, 0.08)";
      ctx.lineWidth = 1.5;

      // Animated sine wave
      ctx.beginPath();
      for (let x = 0; x < width; x += 5) {
        const y = height / 2 + Math.sin(x * 0.008 + tick * 0.02) * 40 + Math.cos(x * 0.003) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second sine wave (harmonic)
      ctx.strokeStyle = "rgba(99, 102, 241, 0.06)";
      ctx.beginPath();
      for (let x = 0; x < width; x += 5) {
        const y = height * 0.4 + Math.cos(x * 0.01 - tick * 0.015) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Rotating geometric shapes (triangles/circles)
      ctx.save();
      ctx.translate(width * 0.82, height * 0.45);
      ctx.rotate(tick * 0.003);
      ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
      ctx.beginPath();
      ctx.arc(0, 0, 120, 0, Math.PI * 2);
      ctx.stroke();

      // Triangle in circle
      ctx.beginPath();
      ctx.moveTo(0, -120);
      ctx.lineTo(103.9, 60);
      ctx.lineTo(-103.9, 60);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Second geometric focal point on left
      ctx.save();
      ctx.translate(width * 0.12, height * 0.65);
      ctx.rotate(-tick * 0.002);
      ctx.strokeStyle = "rgba(14, 165, 233, 0.1)";
      ctx.beginPath();
      ctx.arc(0, 0, 90, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Render floating formulas & math symbols
      symbols.forEach((sym) => {
        sym.x += sym.speedX;
        sym.y += sym.speedY;
        sym.angle += sym.angularSpeed;

        if (sym.x < -100) sym.x = width + 50;
        if (sym.x > width + 100) sym.x = -50;
        if (sym.y < -50) sym.y = height + 50;
        if (sym.y > height + 50) sym.y = -50;

        ctx.save();
        ctx.translate(sym.x, sym.y);
        ctx.rotate(sym.angle);
        ctx.font = `600 ${sym.size}px 'Plus Jakarta Sans', system-ui, sans-serif`;
        ctx.fillStyle = `rgba(30, 58, 138, ${sym.opacity})`;
        ctx.fillText(sym.text, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
