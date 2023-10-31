import React, { ReactNode } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

const DisplayBox = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='relative w-full border rounded-lg flex-col overflow-hidden'>
      <div className='absolute right-4 top-4'>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Animation Speed"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='2'>Fast</SelectItem>
            <SelectItem value='1'>Normal</SelectItem>
            <SelectItem value='3'>Slow</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='h-[200px] bg-black/80 flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
};

export default DisplayBox;
