import rehypeShiki from '@leafac/rehype-shiki';
import nextMDX from '@next/mdx';
import { recmaImportImages } from 'recma-import-images';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import shiki from 'shiki';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
    // See scripts/image-loader.js and scripts/image-uploader.js
    // loader: 'custom',
    // loaderFile: './scripts/image-loader.js',
  },
};

export default async function config() {
  let highlighter = await shiki.getHighlighter({
    theme: 'one-dark-pro',
  });

  let withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [[rehypeShiki, { highlighter }]],
      remarkPlugins: [remarkGfm, remarkUnwrapImages],
    },
  });

  return withMDX(nextConfig);
}
