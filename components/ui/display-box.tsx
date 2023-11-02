'use client';

import React, {
  ReactElement,
  useState,
} from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

const DisplayBox = ({ children }: { children?: ReactElement }) => {
  let [animationSpeed, setAnimationSpeed] = useState<number>(0);

  const handleSelectChange = (value: string) => {
    if (value === "1") {
      setAnimationSpeed(0.2)
    } else if (value === "2") {
       setAnimationSpeed(0.6);
    } else if (value === "3") {
       setAnimationSpeed(5);
    } else {
      setAnimationSpeed(999)
    }
  };

  const enhancedChildren = children
    ? React.Children.map(children, (child) =>
        React.cloneElement(child, { animationSpeed })
      )
    : children;

  return (
    <div className='relative w-full border rounded-lg flex-col overflow-hidden'>
      <div className='absolute right-4 top-4'>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder='Animation Speed' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Default</SelectItem>
            <SelectItem value='2'>Slow</SelectItem>
            <SelectItem value='3'>Super Slow</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='h-[200px] dark:bg-black/80 bg-zinc-50 flex items-center justify-center'>
        {enhancedChildren}
      </div>
    </div>
  );
};

export default DisplayBox;
