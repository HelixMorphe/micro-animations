import React, { useEffect } from 'react';

import { Mode } from './dynamic-island';

const AnimateTimer = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMode('timerMinimized');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return <></>;
};

export default AnimateTimer;
