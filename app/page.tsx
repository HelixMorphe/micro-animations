import {
  ExclusiveTabsUsingClipPath,
  ExclusiveTabsUsingMixBlendMode,
} from '@/components/animations/exclusive-tabs';
import DisplayBox from '@/components/ui/display-box';

export default function Home() {
  return (
    <main className='container'>
      <div className='min-h-[calc(100vh-64px)] w-4/5 m-auto'>
        <h2 className='pt-10 text-3xl font-semibold tracking-tight transition-colors'>
          Exclusion tabs
        </h2>
        <h3 className='mt-8 mb-6 scroll-m-20 text-xl font-medium tracking-tight'>
          using <span>mix-blend-mode</span>
        </h3>
        {/* <p className='mb-8 leading-7 [&:not(:first-child)]:mt-6'></p> */}
        <DisplayBox>
          <ExclusiveTabsUsingMixBlendMode />
        </DisplayBox>
        <h3 className='mt-8 mb-6 scroll-m-20 text-xl font-medium tracking-tight'>
          using <span>background-blend-mode</span>
        </h3>
        <DisplayBox>
          <ExclusiveTabsUsingClipPath />
        </DisplayBox>
        <h3 className='mt-8 mb-6 scroll-m-20 text-xl font-medium tracking-tight'>
          using <span>using clip-path</span>
        </h3>
        <DisplayBox>
          <ExclusiveTabsUsingClipPath />
        </DisplayBox>
      </div>
    </main>
  );
}
