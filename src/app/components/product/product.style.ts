import { ViewMode } from '@/app/types/product';
import styled from 'styled-components';

export const ProductsGrid = styled.ul<{ $viewMode: ViewMode }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${(props) => (props.$viewMode === 'grid' ? 'repeat(4,1fr)' : '1fr')};
`;
