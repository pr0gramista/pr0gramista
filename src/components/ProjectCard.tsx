import { twMerge } from 'tailwind-merge';

export type ProjectCardProps = React.PropsWithChildren & {
  className?: string;
  link?: string;
  title: string;
  tech: string;
};

export const ProjectCard = ({
  children,
  className,
  title,
  link,
  tech,
}: ProjectCardProps) => {
  return (
    <div className={twMerge('my-4', className)}>
      <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
        <a href={link} className="text-lg font-semibold underline">
          {title}
        </a>
        <span className="hidden sm:block">-</span>
        <span className="text-sm text-gray-600">{tech}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};
