import React from 'react';

import {
  ExclusiveTabsUsingBgBlendMode,
  ExclusiveTabsUsingClipPath,
} from '@/components/animations/exclusive-tabs';
import DisplayBox from '@/components/ui/display-box';

const ExclusionPage = () => {
  return (
    <main>
      <div className='container min-h-[calc(100vh-64px)] m-auto'>
        <h2 className='pt-10 text-3xl font-semibold tracking-tight transition-colors'>
          Exclusion tabs
        </h2>
        <h3 className='mt-8 text-muted-foreground mb-6 scroll-m-20 text-xl font-medium tracking-tight'>
          using <span>background-blend-mode</span>
        </h3>
        <DisplayBox>
          <ExclusiveTabsUsingBgBlendMode />
        </DisplayBox>
        <h3 className='mt-8 text-muted-foreground mb-6 scroll-m-20 text-xl font-medium tracking-tight'>
          using <span>clip-path</span>
        </h3>
        <DisplayBox>
          <ExclusiveTabsUsingClipPath />
        </DisplayBox>
      </div>
    </main>
  );
};

export default ExclusionPage;
