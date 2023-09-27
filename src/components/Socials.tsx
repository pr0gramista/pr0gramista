'use client';

import {
  DevToLogo,
  GithubLogo,
  StackOverflowLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

const navigation = [
  {
    name: 'Twitter',
    href: 'https://x.com/pr0gramista',
    icon: TwitterLogo,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/pr0gramista',
    icon: GithubLogo,
  },
  {
    name: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/4698611/pr0gramista',
    icon: StackOverflowLogo,
  },
  {
    name: 'DEV',
    href: 'https://dev.to/pr0gramista',
    icon: DevToLogo,
  },
];

export type SocialsProps = {
  variant?: 'big' | 'small';
  className?: string;
};

export default function Socials({
  className,
  variant = 'small',
}: SocialsProps) {
  return (
    <div
      className={twMerge(
        'flex justify-center space-x-6 md:order-2',
        variant === 'big' && 'my-2 justify-start space-x-4',
        className,
      )}
    >
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-gray-500"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon
            className={twMerge('h-6 w-6', variant === 'big' && 'h-8 w-8')}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}
