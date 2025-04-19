'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Form, FormContainer, SearchButton, SearchRow, StyledInput } from './search.style';

interface SearchFormProps {
  defaultQuery: string;
}

export default function SearchForm({ defaultQuery }: SearchFormProps) {
  const [query, setQuery] = useState(defaultQuery);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = query.trim();
    router.push(`/?query=${encodeURIComponent(trimmed)}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <SearchRow>
          <StyledInput type='text' name='query' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='상품명을 검색해보세요' />
          <SearchButton type='submit'>검색</SearchButton>
        </SearchRow>
      </FormContainer>
    </Form>
  );
}
