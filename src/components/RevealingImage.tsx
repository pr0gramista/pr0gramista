'use client';

import { useRef } from 'react';
import Image, { type ImageProps } from 'next/image';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

const MotionImage = motion(Image);

export type RevealingImageProps = Pick<
  ImageProps,
  'src' | 'sizes' | 'quality' | 'className'
> & { alt?: string };

export default function RevealingImage(props: RevealingImageProps) {
  const ref = useRef<React.ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className="group relative">
      <MotionImage alt="" style={{ filter } as any} {...props} />
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image alt="" {...props} />
      </div>
    </div>
  );
}
