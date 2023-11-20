import React, {
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  useAnimate,
} from 'framer-motion';

import { Button } from '../ui/button';
import AnimateCharging from './animate-charging';
import AnimateTimer from './animate-timer';

export type Mode = 'idle' | 'charging' | 'timer' | 'timerMinimized';

type ModeInfo = {
  id: number;
  mode: Mode;
  label: String;
};

const modeInfo: ModeInfo[] = [
  {
    id: 1,
    mode: 'idle',
    label: 'Idle',
  },
  {
    id: 2,
    mode: 'charging',
    label: 'Charging',
  },
  {
    id: 3,
    mode: 'timer',
    label: 'Timer',
  },

];

const DynamicIsland = () => {
  const [mode, setMode] = useState<Mode>('idle');

  const [scope, animate] = useAnimate();

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
    timerMinimized: {
      width: 236,
      height: 32,
      borderRadius: 32,
    },
  };

  const animateMode = () => {
    switch (mode) {
      case 'idle':
        return <></>;
      case 'charging':
        return <AnimateCharging setMode={setMode} />;
      case 'timer':
        return <AnimateTimer setMode={setMode} />;
    }
  };

  useEffect(() => {
    if (mode === 'idle') {
      animate(
        scope.current,
        { width: 122, borderRadius: 32, height: 36 },
        { type: 'spring', damping: 12 }
      );
    } else if (mode === 'charging') {
      animate(
        scope.current,
        { width: 314, borderRadius: 32, height: 36 },
        { type: 'spring', damping: 12 }
      );
    } else if (mode === 'timer') {
      animate(
        scope.current,
        { width: 366, borderRadius: 50, height: 82 },
        { type: 'spring', damping: 12 }
      );
    } else if (mode === 'timerMinimized') {
      animate(
        scope.current,
        { width: 236, borderRadius: 32, height: 36 },
        { type: 'spring', damping: 12 }
      );
    }
  }, [mode]);

  return (
    <>
      <div
        ref={scope}
        className='h-9 bg-black w-[122px] shadow-lg shadow-black/30 dark:shadow-black/50 rounded-[32px] flex items-center px-4'
      >
        <AnimatePresence>{animateMode()}</AnimatePresence>
      </div>
      <div className='text-center mt-16 flex gap-4 w-full justify-center'>
        {modeInfo.map(({ id, label, mode }) => (
          <Button
            key={id}
            onClick={() => {
              setMode(mode);
            }}
            className='bg-zinc-50 dark:bg-zinc-900'
            variant={'outline'}
          >
            {label}
          </Button>
        ))}
      </div>
    </>
  );
};

export default DynamicIsland;
