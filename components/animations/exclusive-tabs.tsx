'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface Tab {
  id: number;
  label: string;
}

let tabs: Tab[] = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'Product' },
  { id: 3, label: 'Solution' },
  { id: 4, label: 'Customers' },
  { id: 5, label: 'Blog' },
];

function ExclusiveTabs() {
  let [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <div className='flex space-x-2 text-sm'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
          }}
          className={cn(
            'relative rounded-full px-3 py-1.5 font-medium outline-2 outline-orange-500',
            activeTab === tab.id && 'text-black'
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              style={{
                borderRadius: 9999,
              }}
              transition={{ type: 'spring', duration: 5 }}
              layoutId='active-pill'
              className='bg-orange-500 absolute inset-0'
            ></motion.div>
          )}
          <span className='relative z-10 bg-blend-exclusion'>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export { ExclusiveTabs };
