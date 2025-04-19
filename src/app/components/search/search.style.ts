'use client';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 640px;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border-radius: 9999px;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:focus-within {
    border-color: #d1d5db;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  font-size: 1rem;
  color: #1f2937;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1.25rem;
  background-color: #e5e7eb;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d1d5db;
    color: #111827;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.2);
  }
`;

export const SortBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const SortButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  color: ${(props) => (props.$active ? '#1f2937' : '#9ca3af')};
  border-bottom: 2px solid ${(props) => (props.$active ? '#1f2937' : 'transparent')};
  font-weight: ${(props) => (props.$active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #1f2937;
  }
`;
