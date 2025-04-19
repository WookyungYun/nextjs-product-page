import { SearchFormProps } from '../types/product';

export default function SearchForm({ defaultQuery }: SearchFormProps) {
  return (
    <>
      <form>
        <input type='text' name='query' defaultValue={defaultQuery} placeholder='상품명을 검색해보세요' />
        <button type='submit'>검색</button>
      </form>
    </>
  );
}
