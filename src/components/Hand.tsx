'use client';

import { motion } from 'framer-motion';

export type HandProps = {};

export default function Hand({}: HandProps) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: 40 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.4 }}
      transition={{ type: 'spring', duration: 0.8, damping: 8 }}
      className="inline-block transform-gpu"
    >
      👋
    </motion.span>
  );
}
