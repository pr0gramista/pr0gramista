'use client'

import { X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

export type PolishProps = {}

export default function Polish({}: PolishProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const ignored = localStorage.getItem('polish_ignored') === 'true'
    setVisible(!ignored && window.navigator?.languages?.includes('pl'))
  }, [])

  return (
    <Transition
      show={visible}
      enter="transition-all duration-400"
      enterFrom="scale-0 opacity-0"
      enterTo="scale-1 opacity-100"
      leave="transition-all duration-400"
      leaveFrom="opacity-100 scale-1"
      leaveTo="scale-0 opacity-0"
    >
      <div className="my-4 rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">🇵🇱</div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-red-700">
              Hej! Jeśli rozumiesz polski to być może preferujesz{' '}
              <a
                href="https://pr0gramista.pl"
                className="text-red-700 underline underline-offset-2 hover:text-red-500"
              >
                polską wersje tej strony
              </a>
            </p>
            <button
              type="button"
              onClick={() => {
                setVisible(false)
                localStorage.setItem('polish_ignored', 'true')
              }}
              className="inline-flex rounded-md bg-red-50 p-0.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}
