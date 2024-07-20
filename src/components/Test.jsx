import React, { useState, useRef, useEffect } from 'react';

const DraggableWithInertia = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const applyInertia = () => {
      if (!isDragging && (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1)) {
        setPosition(prev => ({
          x: prev.x + velocity.x,
          y: prev.y + velocity.y,
        }));
        setVelocity(prev => ({
          x: prev.x * 0.95,
          y: prev.y * 0.95,
        }));
        animationFrameId = requestAnimationFrame(applyInertia);
      }
    };

    if (!isDragging) {
      animationFrameId = requestAnimationFrame(applyInertia);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDragging, velocity]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    lastTimeRef.current = Date.now();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastPositionRef.current.x;
      const deltaY = e.clientY - lastPositionRef.current.y;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;

      setPosition(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setVelocity({
        x: deltaX / deltaTime * 16, // Adjust for 60 FPS
        y: deltaY / deltaTime * 16,
      });

      lastPositionRef.current = { x: e.clientX, y: e.clientY };
      lastTimeRef.current = currentTime;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={elementRef}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        cursor: 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      Drag me
    </div>
  );
};

export default DraggableWithInertia;