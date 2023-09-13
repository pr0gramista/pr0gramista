import AuthorBadge from '@/components/AuthorBadge'
import { loadArticles } from '@/lib/mdx'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'pr0gramista | Blog',
  description: 'All blog posts',
  authors: [
    {
      name: 'Bartosz Wiśniewski',
    },
  ],
  themeColor: '#111827',
  keywords: ['blog', 'articles', 'posts'],
}

export type BlogProps = {}

export default async function Blog({}: BlogProps) {
  const articles = await loadArticles()

  return (
    <div className="mx-auto mt-6 max-w-3xl space-y-4">
      <h1 className="mb-2 font-mono text-xl font-semibold leading-4 sm:text-3xl">
        Blog
      </h1>
      <p>
        List of all my English blog posts. I usually post these to{' '}
        <a className="underline" href="https://dev.to">
          dev.to
        </a>{' '}
        and Medium as well.
      </p>
      {articles.map((article) => {
        return (
          <article key={article.href} className="max-w-xl">
            <Link href={article.href}>
              <span className="mb-1 font-mono text-2xl font-semibold hover:underline">
                {article.title}
              </span>
            </Link>
            <div className="mb-2">{article.description}</div>
            <AuthorBadge author={article.author} date={article.date} />
          </article>
        )
      })}
    </div>
  )
}
