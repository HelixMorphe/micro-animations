import React from 'react';

import { Component1Icon } from '@radix-ui/react-icons';

import { ModeToggle } from '../toggle-theme';

function Navbar() {
  return (
    <div className='h-16 flex items-center border-b'>
      <div className='container flex items-center justify-between'>
        <div className='font-bold flex items-center'>
          <Component1Icon width={20} height={20} className="mr-2"/>
          micro-animations
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
