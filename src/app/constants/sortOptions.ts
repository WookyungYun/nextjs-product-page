export const sortOptions = [
  { label: '인기순', sortBy: 'rating', order: 'desc' },
  { label: '최신순', sortBy: 'id', order: 'desc' },
  { label: '가격 낮은순', sortBy: 'price', order: 'asc' },
  { label: '가격 높은순', sortBy: 'price', order: 'desc' },
  { label: '리뷰 많은순', sortBy: 'stock', order: 'desc' },
  { label: '이름순', sortBy: 'title', order: 'asc' }
] as const;
