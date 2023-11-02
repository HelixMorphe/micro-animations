import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import ChargingIcon from '../../public/Charging Icon/Icon';
import { Button } from '../ui/button';

type Mode = 'idle' | 'charging' | 'timer';

const DynamicIsland = () => {
  const [mode, setMode] = useState<Mode>('idle');
  const variants = {
    idle: {
      width: 122,
      borderRadius: 32,
    },
    charging: {
      width: 314,
      borderRadius: 32,
    },
    timer: {
      width: 366,
      height: 82,
      borderRadius: 50,
    },
  };

  return (
    <>
      <motion.div
        variants={variants}
        initial='idle'
        animate={mode}
        transition={{ type: 'spring', damping: 12 }}
        className='bg-black h-9 shadow-lg flex items-center px-4'
      >
        <AnimatePresence>{mode === 'charging' && <Charging />}</AnimatePresence>
      </motion.div>

      <div className='text-center mt-16 flex gap-4 w-full justify-center'>
        <Button
          onClick={() => {
            setMode('idle');
          }}
          className='bg-zinc-50 dark:bg-zinc-900'
          variant={'outline'}
        >
          Idle
        </Button>
        <Button
          onClick={() => {
            setMode('charging');
          }}
          className='bg-zinc-50 dark:bg-zinc-900'
          variant={'outline'}
        >
          Charging
        </Button>
        <Button
          onClick={() => {
            setMode('timer');
          }}
          className='bg-zinc-50 dark:bg-zinc-900'
          variant={'outline'}
        >
          Timer
        </Button>
      </div>
    </>
  );
};

export default DynamicIsland;

const Charging = () => {
  return (
    <motion.div className='w-full flex justify-between items-center'>
      <motion.p
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(0.25rem)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        exit={{
          opacity: 0,
          filter: 'blur(0.25rem)',
          transition: { duration: 0.1 },
        }}
        transition={{ delay: 0.1 }}
        className="text-white"
      >
        Charging
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(0.25rem)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        exit={{
          opacity: 0,
          filter: 'blur(0.25rem)',
          transition: { duration: 0.1 },
        }}
        transition={{ delay: 0.1 }}
        className='flex items-center gap-2'
      >
        <p className={`text-[#8DEB92] font-semibold`}>85%</p>
        <ChargingIcon />
      </motion.div>
    </motion.div>
  );
};
