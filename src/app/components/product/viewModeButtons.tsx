import { ViewModeButtonsProps } from '@/app/types/product';

export default function ViewModeButtons({ viewMode, setViewMode }: ViewModeButtonsProps) {
  console.log(viewMode);

  return (
    <div className='flex gap-2'>
      <button onClick={() => setViewMode('grid')}>Grid</button>
      <button onClick={() => setViewMode('list')}>List</button>
    </div>
  );
}
