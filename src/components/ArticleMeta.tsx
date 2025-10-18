import { Article } from '@/lib/mdx';
import Image from 'next/image';

export type ArticleMetaProps = {
  article: Article;
};

export default function ArticleMeta({ article }: ArticleMetaProps) {
  return (
    <div className="flex items-center">
      {article.image && (
        <Image
          quality={80}
          height={64}
          className="rounded-md"
          {...article.image}
          alt=""
        />
      )}
      <time className="block font-mono text-sm text-gray-500">
        {article.date}
      </time>
    </div>
  );
}
