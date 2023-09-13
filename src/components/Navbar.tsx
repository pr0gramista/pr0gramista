import Link from 'next/link'
import Logo from './Logo'

export type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="mx-auto flex max-w-3xl items-center">
        <Logo />
        <div className="flex-grow" />
        <div className="flex gap-1 font-mono text-sm text-white sm:text-base md:gap-2">
          <span>{'['}</span>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <span>{'|'}</span>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <span>{'|'}</span>
          <Link className="hover:underline" href="/projects">
            Projects
          </Link>
          <span>{']'}</span>
        </div>
      </div>
    </nav>
  )
}
