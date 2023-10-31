'use client';

import React, {
  ReactElement,
  useEffect,
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
      setAnimationSpeed(0.8)
    } else if (value === "2") {
       setAnimationSpeed(0.2);
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

  useEffect(() => {
    console.log('value changed', animationSpeed);
  }, [animationSpeed]);

  return (
    <div className='relative w-full border rounded-lg flex-col overflow-hidden'>
      <div className='absolute right-4 top-4'>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder='Animation Speed' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='2'>Fast</SelectItem>
            <SelectItem value='1'>Normal</SelectItem>
            <SelectItem value='3'>Slow</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='h-[200px] bg-black/80 flex items-center justify-center'>
        {enhancedChildren}
      </div>
    </div>
  );
};

export default DisplayBox;
