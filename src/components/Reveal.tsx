import { motion } from 'framer-motion';
import { ReactNode, ComponentProps } from 'react';

interface RevealProps extends ComponentProps<'div'> {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  distance?: number;
}

export const Reveal = ({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 30,
  ...props
}: RevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth feel
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
