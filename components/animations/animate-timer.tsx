import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import CloseIcon from '../../public/Close';
import PlayIcon from '../../public/Pause';
import { Mode } from './dynamic-island';

const AnimateTimer = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}) => {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setMode('timerMinimized');
    // }, 2500);
    // return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: 'blur(0.5rem)' }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { delay: 0.1 },
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        filter: 'blur(0.5rem)',
        transition: {
          duration: 0
        }
      }}
      className='text-white flex items-center justify-between w-full px-1'
    >
      <div className='flex gap-3'>
        <div onClick={()=>{setMode("timerMinimized")}} className='w-[52px] h-[52px] bg-[#FB8B28] bg-opacity-[0.45] hover:bg-[#FB8B28]/50 transition-all duration-150 rounded-full flex items-center justify-center cursor-pointer'>
          <PlayIcon />
        </div>
        <div
          onClick={() => {
            setMode('idle');
          }}
          className='w-[52px] h-[52px] bg-[#838388] bg-opacity-[0.70] hover:bg-opacity-80 transition-all duration-150 rounded-full flex items-center justify-center cursor-pointer'
        >
          <CloseIcon />
        </div>
      </div>
      <div className='flex items-baseline gap-1.5'>
        <p className='text-[#FB8B28] align-baseline'>Timer</p>
        <p className='font-medium text-[#FB8B28] text-[32px]'>9:51</p>
      </div>
    </motion.div>
  );
};

export default AnimateTimer;
