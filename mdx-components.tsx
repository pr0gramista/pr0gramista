import { type MDXComponents as MDXComponentsType } from 'mdx/types'

import { MdxComponents } from '@/components/MdxComponents'

export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MdxComponents,
  }
}
