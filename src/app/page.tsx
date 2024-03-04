import Socials from '@/components/Socials';
import AuthorBadge from '@/components/AuthorBadge';
import { loadArticles } from '@/lib/mdx';
import Link from 'next/link';
import AboutMdx from './about.mdx';
import Hand from '@/components/Hand';
import Crab from '@/components/Crab';
import Polish from '@/components/Polish';

export type AboutProps = {};

export default async function About({}: AboutProps) {
  const articles = await loadArticles();

  return (
    <div className="mx-auto mt-6 max-w-3xl">
      <h1 className="mb-2 font-mono text-xl font-semibold leading-4 sm:text-3xl">
        Hello there <Hand />
      </h1>
      <p>
        My name is Bartosz Wiśniewski and I am software engineer, with a passion
        for learning and building stuff. Programming polyglot with a special
        place in heart for Flutter, React, Rust <Crab /> and TypeScript.
      </p>
      <div className="mt-2 rounded-md bg-gray-50 p-4">
        <h3 className="font-mono">Check out my profiles on:</h3>
        <Socials variant="big" />
        <p className="font-mono">
          Alternatively you can contact me via email:{' '}
          <a className="hover:underline" href="mailto:kontakt@pr0gramista.pl">
            kontakt@pr0gramista.pl
          </a>
        </p>
      </div>
      <AboutMdx />
      <Polish />
      <h3 className="mt-2 font-mono text-xl font-semibold">Latest posts</h3>
      <div className="mx-auto mt-2 max-w-3xl space-y-2">
        {articles.map((article) => {
          return (
            <article key={article.href} className="max-w-xl">
              <Link href={article.href}>
                <span className="mb-1 font-mono font-semibold hover:underline">
                  {article.title}
                </span>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
