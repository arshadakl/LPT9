import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Create SplitType instance
    const typeSplit = new SplitType(textRef.current, { type: 'words, chars' });
    const chars = typeSplit.chars;

    gsap.set(textRef.current, { perspective: 400 });

    const tl = gsap.timeline();

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01
    });

   

    // Cleanup function
    return () => {
      typeSplit.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <span ref={textRef} className="">
      {children}
    </span>
  );
};

export default AnimatedText;
