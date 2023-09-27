import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

const styles = {
  light: 'text-white',
  dark: 'text-gray-700',
};

export default function Logo({ className, variant = 'light' }: LogoProps) {
  return (
    <Link href="/">
      <span
        className={twMerge(
          'font-mono text-3xl text-white',
          styles[variant],
          className,
        )}
      >
        {'>'}
        <span className="hidden sm:inline">{'PR0GRAMISTA'}</span>
        <span className="animate-blink">{'_'}</span>
      </span>
    </Link>
  );
}
