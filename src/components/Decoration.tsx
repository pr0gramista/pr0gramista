import { twMerge } from 'tailwind-merge';

export type BlackProps = {
  className?: string;
  w?: number;
};

export const BLOCK_SIZE = 24;

export const BlackBox = ({ className, w }: BlackProps) => {
  return (
    <div
      className={twMerge('h-6 w-6 bg-gray-900', className)}
      style={{
        width: w != null ? w * BLOCK_SIZE : undefined,
      }}
    />
  );
};

export const Gap = ({ w }: { w: number }) => {
  return <div style={{ width: w * BLOCK_SIZE }} />;
};
