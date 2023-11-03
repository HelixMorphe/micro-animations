import { useEffect } from 'react';

import { motion } from 'framer-motion';

import ChargingIcon from '../../public/Charging Icon/Icon';

const AnimateCharging = ({ setMode }: { setMode: any }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMode('idle');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return <Charging />;
};

const Charging = () => {
  return (
    <motion.div className='w-[314px] flex justify-between items-center'>
      <motion.p
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(0.5rem)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        exit={{
          opacity: 0,
          filter: 'blur(0.25rem)',
          transition: { duration: 0.1 },
        }}
        transition={{ delay: 0.1 }}
        className='text-white'
      >
        Charging
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(0.5rem)' }}
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

export default AnimateCharging