'use client';
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  display: flex;
  padding: 3rem;
  gap: 2rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const GridWarpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

export const MainImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #f3f4f6;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const ThumbnailButton = styled.button<{ $isSelected: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s;
  border: ${(props) => (props.$isSelected ? '2px solid #3b82f6' : 'none')};
  &:hover {
    border: 2px solid #bfdbfe;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BrandCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
`;

export const RatingStock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

export const CurrentPrice = styled.span`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
`;

export const OriginalPrice = styled.span`
  font-size: 1.25rem;
  color: #6b7280;
  text-decoration: line-through;
`;

export const Description = styled.p`
  color: #4b5563;
  line-height: 1.625;
`;
