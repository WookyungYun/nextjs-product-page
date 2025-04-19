'use client';
import styled from 'styled-components';

export const LoadingSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const Spinner = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  background: #9ca3af;
  border-radius: 50%;
  animation: blink 1.4s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%,
    80%,
    100% {
      transform: scale(0.9);
      opacity: 0.3;
    }
    40% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;
