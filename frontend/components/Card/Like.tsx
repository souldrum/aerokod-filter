import React from 'react';
import cn from 'classnames';

type Props = Pick<React.SVGProps<SVGAElement>, 'fill' | 'className'>;

export const Like: React.FC<Props> = ({ fill = '#040306', className }) => {
  return (
    <div
      className={cn(
        'p-2.5 md:p-3 xl:p-4 border border-black-100 rounded-full',
        className && className
      )}
    >
      <svg
        className="h-3 w-3 md:h-4 md:w-4 xl:h-[19px] xl:w-[19px]"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 19.0002L8.1225 17.6334C3.23 12.798 0 9.59852 0 5.69498C0 2.49552 2.299 0.000152588 5.225 0.000152588C6.878 0.000152588 8.4645 0.838845 9.5 2.15383C10.5355 0.838845 12.122 0.000152588 13.775 0.000152588C16.701 0.000152588 19 2.49552 19 5.69498C19 9.59852 15.77 12.798 10.8775 17.6334L9.5 19.0002Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
