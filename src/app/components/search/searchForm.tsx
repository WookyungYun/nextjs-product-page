'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Form, FormContainer, SearchButton, SearchRow, SortBar, SortButton, StyledInput } from './search.style';
import { sortOptions } from '@/app/constants/sortOptions';
import { Order } from '@/app/types/product';

interface SearchFormProps {
  defaultQuery: string;
  defaultSortBy: string;
  defaultOrder: Order;
}

export default function SearchForm({ defaultQuery, defaultSortBy, defaultOrder }: SearchFormProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [selectedSort, setSelectedSort] = useState(`${defaultSortBy}|${defaultOrder}`);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = query.trim();
    const [sortBy, order] = selectedSort.split('|');
    router.push(`?query=${trimmed}&sortBy=${sortBy}&order=${order}`);
  };

  const handleOptionClick = (sortBy: string, order: Order) => {
    setSelectedSort(`${sortBy}|${order}`);
    router.push(`?query=${query}&sortBy=${sortBy}&order=${order}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <SearchRow>
          <StyledInput type='text' name='query' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='상품명을 검색해보세요' />
          <SearchButton type='submit'>검색</SearchButton>
        </SearchRow>
        <SortBar>
          {sortOptions.map((option) => {
            const value = `${option.sortBy}|${option.order}`;
            return (
              <SortButton key={option.label} type='button' $active={(selectedSort === value) as boolean} onClick={() => handleOptionClick(option.sortBy, option.order)}>
                {option.label}
              </SortButton>
            );
          })}
        </SortBar>
      </FormContainer>
    </Form>
  );
}
