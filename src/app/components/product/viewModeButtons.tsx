import { ViewModeButtonsProps } from '@/app/types/product';
import { Button, ButtonWrapper } from './product.style';

export default function ViewModeButtons({ onClick }: ViewModeButtonsProps) {
  return (
    <ButtonWrapper>
      <Button onClick={() => onClick('grid')}>Grid</Button>
      <Button onClick={() => onClick('list')}>List</Button>
    </ButtonWrapper>
  );
}
