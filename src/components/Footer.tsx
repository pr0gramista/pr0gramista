'use client'

import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <Socials />
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-700">
            &copy; Bartosz Wiśniewski
          </p>
        </div>
      </div>
    </footer>
  )
}
