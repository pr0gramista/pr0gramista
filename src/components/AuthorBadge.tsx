import { Article } from '@/lib/mdx';
import Image from 'next/image';

export type AuthorBadgeProps = {
  author: Article['author'];
  date: Article['date'];
};

export default function AuthorBadge({ author, date }: AuthorBadgeProps) {
  return (
    <div className="flex items-center p-2">
      <Image
        quality={80}
        height={64}
        className="rounded-md"
        {...author.image}
        alt=""
      />
      <div className="ml-4">
        <div>{author.name}</div>
        <div className="text-gray-500">{author.role}</div>
        <time className="block font-mono text-sm text-gray-500">{date}</time>
      </div>
    </div>
  );
}
