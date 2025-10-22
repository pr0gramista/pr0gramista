import RevealingImage from '@/components/RevealingImage';
import { twMerge } from 'tailwind-merge';

export const MdxComponents = {
  img: function MdxImage({
    className,
    alt,
    ...props
  }: React.ComponentPropsWithoutRef<typeof RevealingImage>) {
    const captionRemovedAlt = alt?.replace('/caption', '');
    const caption = captionRemovedAlt !== alt;

    const miniRemovedAlt = captionRemovedAlt?.replace('/mini', '');
    const mini = miniRemovedAlt !== captionRemovedAlt;

    const iconRemovedAlt = miniRemovedAlt?.replace('/icon', '');
    const icon = iconRemovedAlt !== miniRemovedAlt;

    return (
      <div
        className={twMerge(
          'group isolate my-10 overflow-hidden rounded-md bg-neutral-100 max-sm:-mx-6',
          caption && 'mb-1 mt-10',
          mini && 'my-0',
          icon && 'mb-2 mt-10 max-w-[128px]',
          className,
        )}
      >
        <RevealingImage
          {...props}
          alt={iconRemovedAlt}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="w-full object-cover"
        />
      </div>
    );
  },
  table: function MdxTable({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div
        className={twMerge(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    );
  },
  wrapper({
    children,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div className={twMerge('typography mx-auto max-w-4xl', className)}>
        {children}
      </div>
    );
  },
};
