import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const MaskRotation = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'words',
      tagName: 'span'
    });

    gsap.set(split.words, {
      opacity: 0,
      y: '100%',
      rotateZ: 10
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(split.words, {
      opacity: 1,
      y: '0%',
      rotateZ: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={textRef} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default MaskRotation;