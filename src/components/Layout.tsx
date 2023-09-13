'use client'

export type LayoutProps = React.PropsWithChildren

export default function Layout({ children }: LayoutProps) {
  return <div className="px-2">{children}</div>
}
