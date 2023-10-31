import React from 'react';

import { ModeToggle } from '../toggle-theme';

function Navbar() {
  return (
    <div className='h-16 flex items-center border-b'>
      <div className='container flex items-center justify-between'>
        <p className='font-bold'>Bakarwadi</p>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
