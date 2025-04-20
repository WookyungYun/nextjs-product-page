'use client';
import { ViewMode } from '@/app/types/product';
import Link from 'next/link';
import styled from 'styled-components';

export const ProductsGrid = styled.ul<{ $viewMode: ViewMode }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${({ $viewMode }) => ($viewMode === 'grid' ? 'repeat(auto-fit, minmax(250px, 1fr))' : '1fr')};
  width: 100%;

  @media (min-width: 1280px) {
    grid-template-columns: ${({ $viewMode }) => ($viewMode === 'grid' ? 'repeat(4, 1fr)' : '1fr')};
  }
`;

export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

export const CardWrapper = styled.li`
  list-style: none;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const Card = styled.article<{ $isList: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isList ? 'row' : 'column')};
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  height: ${(props) => (props.$isList ? 'auto' : '100%')};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  flex: 1;
  padding: 1.25rem;
`;

export const Brand = styled.h3`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.4;
`;

export const PriceWrapper = styled.section`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
`;

export const Original = styled.span`
  font-size: 0.875rem;
  text-decoration: line-through;
  color: #9ca3af;
`;

export const Rating = styled.div`
  font-size: 0.75rem;
  color: #fbbf24;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #1f2937;
`;

export const Star = styled.span`
  color: #fbbf24;
`;

// view mode button
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0 1rem;
`;

export const Button = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #f3f4f6;
  color: #1f2937;
  border: 1px solid #d1d5db;
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
    border-color: #cbd5e1;
  }
`;

export const CenteredMessage = styled.p`
  text-align: center;
  color: #6b7280;
  padding: 3rem 0;
  font-size: 1rem;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 50;
  width: 48px;
  height: 48px;
  background-color: #111827;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div<{ $viewMode: ViewMode }>`
  position: relative;
  width: ${({ $viewMode }) => ($viewMode === 'list' ? '300px' : '100%')};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
