'use client';
import React from 'react';

import { motion } from 'framer-motion';

import DynamicIsland from '@/components/animations/dynamic-island';

const DynamicIslandPage = () => {
  const enterAnimationVariant = {
    initial: {
      opcatiy: 0,
    },
    animate: {
      opacity: 0,
    },
    transition: {
      duration: 1,
    },
  };
  return (
    <div className='container py-10 min-h-[calc(100vh-64px)] m-auto'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center sm:text-left text-3xl font-semibold tracking-tight transition-colors'
      >
        Dynamic Island
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center sm:text-left mt-6 text-lg leading-7 sm:w-9/12 text-muted-foreground'
      >
        On iPhone 14 Pro and later, you can check alerts and current activity in
        progress—such as a Voice Memo recording in progress, an AirDrop. The
        Dynamic Island appears at the top of the{' '}
        <span className='text-white'>iPhone</span> screen whenever your iPhone
        is unlocked.
      </motion.p>
      <div className='mt-20 border sm:w-9/12 m-auto rounded-lg bg-zinc-100 dark:bg-zinc-500/10 p-8 flex flex-col items-center justify-center'>
        <DynamicIsland />
      </div>
    </div>
  );
};

export default DynamicIslandPage;

