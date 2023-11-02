import React from 'react';

import Link from 'next/link';

import { Component1Icon } from '@radix-ui/react-icons';

import { ModeToggle } from '../toggle-theme';

function Navbar() {
  return (
    <div className='h-16 flex items-center border-b'>
      <div className='w-11/12 m-auto sm:container flex items-center justify-between'>
        <div className='flex items-center sm:gap-10'>
          <Link href={'/'}>
            <div className='font-bold flex items-center'>
              <Component1Icon width={20} height={20} className='mr-2' />
              <span className=''>rhythm</span>
            </div>
          </Link>
          <div className='hidden text-sm font-medium sm:flex items-center text-muted-foreground gap-6'>
            <Link href={'/exclusion-tabs'}>
              <p>Exclusion tabs</p>
            </Link>
            <Link href={'/dynamic-island'}>
              <p>Dynamic Island</p>
            </Link>
          </div>
        </div>

        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
