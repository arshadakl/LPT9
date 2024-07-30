import React, { useState, useRef, useEffect } from 'react';
import { fadeIn } from '../gsap/Framer';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function FrameCard({ initialPosition = { x: 0, y: 0 }, parentWidth = 0, parentHeight = 0, zIndex, onDragStart, Data, title, pos }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  // Use GSAP
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  const constrainPosition = (pos) => {
    if (!cardRef.current) return pos;
    return {
      x: Math.max(0, Math.min(pos.x, parentWidth - cardRef.current.offsetWidth)),
      y: Math.max(0, Math.min(pos.y, parentHeight - cardRef.current.offsetHeight)),
    };
  };

  useEffect(() => {
    let animationFrameId;

    const applyInertia = () => {
      if (!isDragging && (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1)) {
        setPosition((prev) => {
          const newPos = {
            x: prev.x + velocity.x,
            y: prev.y + velocity.y,
          };
          return constrainPosition(newPos);
        });
        setVelocity((prev) => ({
          x: prev.x * 0.1,
          y: prev.y * 0.1,
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
  }, [isDragging, velocity, parentWidth, parentHeight]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    lastTimeRef.current = Date.now();
    onDragStart(); // Call this function to update z-index
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastPositionRef.current.x;
      const deltaY = e.clientY - lastPositionRef.current.y;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;

      setPosition((prev) => {
        const newPos = {
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        };
        return constrainPosition(newPos);
      });

      setVelocity({
        x: (deltaX / deltaTime) * 16,
        y: (deltaY / deltaTime) * 16,
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
    <motion.div
    ref={cardRef}
    variants={fadeIn(pos, 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true }}
    className="card select-none bg-zinc-900/50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-slate-100/40 w-lg min-w-56 md:max-w-[700px] min-h-[200px]" // Add min-h-[200px] or adjust as needed
    style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
    }}
    >
      <div
        className="flex justify-between items-center bg-[#000]/50 rounded-t-lg"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
      >
        <p className="title text-gray-200  ml-2 mt-2 px-3 cursor-pointer text-sm  font-fcode">{title}</p>
        <span className="flex space-x-1">
          <button className="w-10 h-9 -ml-10 cursor-pointer transition-colors duration-200 hover:bg-white/20">
            <svg viewBox="0 0 10.2 1" className="w-2.5 h-2.5 mx-auto">
              <rect height={1} width="10.2" y="50%" x={0} fill="white" />
            </svg>
          </button>
          <button className="maximize w-10 h-9 ml-10 bg-transparent transition-colors duration-200 hover:bg-yellow-500/30">
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 cursor-pointer mx-auto">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" fill="white" />
            </svg>
          </button>
          <button className="close w-10 h-9 ml-1 bg-transparent transition-colors duration-200 cursor-pointer hover:bg-red-500/20">
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 mx-auto">
              <polygon
                points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                fill="white"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="topfix bg-[#000]/50 w-full" />
      <hr className="border-t border-slate-100/50" />
      <div style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown} className="content  custom-scrollbar font-fcode text-slate-100  h-full ">
        <Data />
      </div>
    </motion.div>
  );
}

export default FrameCard;
