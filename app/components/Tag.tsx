import React, { HTMLAttributes } from 'react';

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={`text-xl inline-flex items-center border border-lime-400 rounded-full gap-2 text-lime-400
         px-3 py-1 uppercase ${className}`}
      {...otherProps}
    >
      <span>&#10028;</span>
      <span className='text-sm'>{children}</span>
    </div>
  );
};

export default Tag;
