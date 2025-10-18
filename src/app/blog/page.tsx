import ArticleMeta from '@/components/ArticleMeta';
import AuthorBadge from '@/components/AuthorBadge';
import { siteMetadata, me } from '@/lib/data';
import { loadArticles } from '@/lib/mdx';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'pr0gramista | Blog',
  description: 'All blog posts',
  authors: [me],
  keywords: ['blog', 'articles', 'posts'],
  ...siteMetadata,
};

export type BlogProps = {};

export default async function Blog({}: BlogProps) {
  const articles = await loadArticles();

  return (
    <div className="mx-auto mt-6 max-w-4xl space-y-4">
      <h1 className="mb-2 font-mono text-xl font-semibold leading-4 sm:text-3xl">
        Blog
      </h1>
      <p>
        I do not write regularly, so this is more of a archive rather than a
        blog.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => {
          return (
            <article key={article.href}>
              <Link
                href={article.href}
                className="mb-1 block font-mono text-xl font-semibold hover:underline"
              >
                {article.image && (
                  <Image
                    quality={80}
                    height={64}
                    className="mb-2 rounded-md"
                    {...article.image}
                    alt=""
                  />
                )}
                {article.title}
                {article.lang === 'pl' && <span> 🇵🇱</span>}
              </Link>
              <div className="mb-1">{article.description}</div>
              <div className="flex items-center gap-2">
                <time className="block font-mono text-xs text-gray-500">
                  {article.date}
                </time>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
