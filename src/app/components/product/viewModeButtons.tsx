import { ViewModeButtonsProps } from '@/app/types/product';

export default function ViewModeButtons({ onClick }: ViewModeButtonsProps) {
  return (
    <div className='flex gap-2'>
      <button onClick={() => onClick('grid')}>Grid</button>
      <button onClick={() => onClick('list')}>List</button>
    </div>
  );
}
