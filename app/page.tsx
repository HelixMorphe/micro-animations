import { ExclusiveTabs } from '@/components/animations/exclusive-tabs';
import DisplayBox from '@/components/ui/display-box';

export default function Home() {
  return (
    <main className='container'>
      <div className='min-h-[calc(100vh-64px)] w-4/5 m-auto flex items-center '>
        <DisplayBox>
          <ExclusiveTabs />
        </DisplayBox>
      </div>
    </main>
  );
}
