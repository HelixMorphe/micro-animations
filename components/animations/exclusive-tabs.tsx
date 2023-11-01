'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface Tab {
  id: number;
  label: string;
}

const tabs: Tab[] = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'Product' },
  { id: 3, label: 'Solution' },
  { id: 4, label: 'Customers' },
  { id: 5, label: 'Blog' },
];

function ExclusiveTabsUsingMixBlendMode({ animationSpeed }: { animationSpeed?: number }) {
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
            activeTab === tab.id && "text-orange-900"
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              style={{
                borderRadius: 9999,
              }}
              transition={{ duration: animationSpeed || 0.6 }}
              layoutId='active-pill-mix-blend-mode'
              className='bg-orange-500 absolute inset-0'
            ></motion.div>
          )}
          <span className='relative z-10 mix-blend-exclusion'>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function ExclusiveTabsUsingBgBlendMode({
  animationSpeed,
}: {
  animationSpeed?: number;
}) {
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
            activeTab === tab.id && 'text-orange-900'
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              style={{
                borderRadius: 9999,
              }}
              transition={{ duration: animationSpeed || 0.6 }}
              layoutId='active-pill-bg-blend-mode'
              className='bg-orange-500 absolute inset-0'
            ></motion.div>
          )}
          <span className='relative z-10 bg-blend-exclusion'>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function ExclusiveTabsUsingClipPath({
  animationSpeed,
}: {
  animationSpeed?: number;
  }) {
  let [mount, setIsMount] = useState<boolean>(false);
  let [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [tabDimensions, setTabDimensions] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (!mount) {
      setIsMount(true)
    }
  },[])

  // Define the type of elements the ref will hold
  const tabsRef = useRef<HTMLButtonElement[]>([]);

  const selectTab = (index: number) => {
    setActiveTab(index);
    if (tabsRef.current[index]) {
      setTabDimensions({
        width: tabsRef.current[index].offsetWidth,
        left: tabsRef.current[index].offsetLeft,
      });
    }
    console.log({tabsRef})
  };

  useEffect(() => {
    if (tabsRef.current[activeTab]) {
      setTabDimensions({
        width: tabsRef.current[activeTab].offsetWidth,
        left: tabsRef.current[activeTab].offsetLeft,
      });
    }
  }, [activeTab]);

  const clipPathStyle = {
    clipPath: `inset(0px calc(100% - (${tabDimensions.left}px + ${tabDimensions.width}px)) calc(100% - (0px + 32px)) ${tabDimensions.left}px round 999px)`,
  };

  const transitionDuration = animationSpeed ? (animationSpeed * 1000).toString() + "ms" : "600ms"

  return (
    <div className='flex text-sm relative'>
      <div className='relative space-x-2 text-sm flex'>
        {tabs.map((tab, index) => (
          <button
            ref={(el) => (tabsRef.current[tab.id] = el as HTMLButtonElement)}
            key={tab.id}
            onClick={() => selectTab(tab.id)}
            className={cn(
              'relative rounded-full px-3 py-1.5 font-medium outline-2 outline-orange-500 text-white', !mount && index === 0 && "bg-orange-500 text-black"
            )}
          >
            <span className='relative z-10 bg-blend-exclusion'>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      <div
        aria-hidden='true'
        style={{
          borderRadius: 9999,
          clipPath: mount && clipPathStyle.clipPath || "",
          transitionDuration: transitionDuration,
        }}
        className={cn('z-10 absolute top-0 left-0 hidden text-sm space-x-2', mount && "block bg-orange-500")}
      >
        {tabs.map((tab) => (
          <button
            aria-hidden="true"
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={cn(
              'relative rounded-full px-3 py-1.5 font-medium outline-2 outline-orange-500 text-orange-900'
            )}
          >
            <span className='relative z-10'>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export {
  ExclusiveTabsUsingBgBlendMode,
  ExclusiveTabsUsingClipPath,
  ExclusiveTabsUsingMixBlendMode,
};
