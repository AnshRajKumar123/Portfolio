import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Mouse coordinates (target position)
    let mouseX = 0;
    let mouseY = 0;

    // Current cursor coordinates (lagging position)
    let currentX = 0;
    let currentY = 0;

    let animationFrame;

    const cursorMove = () => {
      // Linear Interpolation (lerp) formula: current + (target - current) * speed
      // Lower speed factor (e.g., 0.08) = more delay/lag. Higher = faster.
      const speedFactor = 0.12; 

      currentX += (mouseX - currentX) * speedFactor;
      currentY += (mouseY - currentY) * speedFactor;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }

      animationFrame = requestAnimationFrame(cursorMove);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    cursorMove(); // Start loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="Cursor"></div>;
};

export default Cursor;