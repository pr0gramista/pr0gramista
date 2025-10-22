import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

export type TechButtonProps = React.PropsWithChildren<{}> & {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  description?: ReactNode;
};

export const TechButton = ({
  children,
  selected,
  onClick,
  className,
  description,
}: TechButtonProps) => {
  const button = (
    <button
      className={twMerge(
        'border-accent-800 bg-accent-100 text-accent-900 flex cursor-pointer gap-2 rounded-full border px-2.5 py-1 transition-colors',
        selected && 'bg-accent-200',
        description && 'hover:bg-accent-200',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (!description) return button;

  return (
    <Tooltip>
      <TooltipTrigger>{button}</TooltipTrigger>
      <TooltipContent>
        <div className="max-w-sm rounded-md bg-white p-2 text-sm shadow">
          {description}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
