import React, { Children, cloneElement } from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = ({ children }) => {
  return <span className="word-wrapper">{children}</span>;
};

// AnimatedCharacters
const AnimatedCharacters = ({ children }) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const wrapCharacters = (element) => {
    if (typeof element === 'string') {
      return element.split(/(\S+)/).map((part, index) => {
        if (part.trim() === '') {
          // For spaces and other whitespace, return them as-is
          return part;
        }
        return part.split('').map((char, charIndex) => (
          <span
            style={{ overflow: 'hidden', display: 'inline-block' }}
            key={`${index}-${charIndex}`}
          >
            <motion.span style={{ display: 'inline-block' }} variants={item}>
              {char}
            </motion.span>
          </span>
        ));
      });
    }
  
    return cloneElement(element, {
      children: Children.map(element.props.children, wrapCharacters),
    });
  };

  return (
    <>
      {Children.map(children, (child) => (
        <Wrapper>{wrapCharacters(child)}</Wrapper>
      ))}
    </>
  );
};

export default AnimatedCharacters;
