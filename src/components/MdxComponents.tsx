import RevealingImage from '@/components/RevealingImage'
import { twMerge } from 'tailwind-merge'

export const MdxComponents = {
  img: function MdxImage({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof RevealingImage>) {
    return (
      <div
        className={twMerge(
          'rounded-4xl max-sm:-mx-6 group isolate my-10 overflow-hidden bg-neutral-100',
          className,
        )}
      >
        <RevealingImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="w-full object-cover"
        />
      </div>
    )
  },
  table: function MdxTable({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div
        className={twMerge(
          'max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto my-10',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    )
  },
  wrapper({
    children,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div className={twMerge('typography mx-auto max-w-3xl', className)}>
        {children}
      </div>
    )
  },
}
