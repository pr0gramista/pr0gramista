import Link from 'next/link';
import Logo from './Logo';

export type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="p-4">
      <div className="mx-auto flex max-w-4xl items-center">
        <Logo variant="dark" />
        <div className="flex-grow" />
        <div className="flex gap-1 font-mono text-sm text-gray-900 sm:text-base md:gap-2">
          <span>{'['}</span>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <span>{'|'}</span>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <span>{'|'}</span>
          <a className="hover:underline" href="https://github.com/pr0gramista">
            GitHub
          </a>
          <span>{']'}</span>
        </div>
      </div>
    </nav>
  );
}
