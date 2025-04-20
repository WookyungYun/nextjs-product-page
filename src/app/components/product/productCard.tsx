import Image from 'next/image';
import { ProductCardProps } from '../../types/product';
import { Brand, Card, ImageWrapper, InfoSection, Original, Price, PriceWrapper, Rating, Star, StyledLink, Title } from './product.style';

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const discountedPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  const reviewCount = product.reviews?.length || 0;
  return (
    <StyledLink href={`/product/${product.id}`}>
      <Card $isList={viewMode === 'list'}>
        <ImageWrapper $viewMode={viewMode}>
          <Image src={product.thumbnail} alt={product.title} fill style={{ objectFit: 'contain' }} />
        </ImageWrapper>
        <InfoSection>
          <Brand>{product.brand}</Brand>
          <Title>{product.title}</Title>
          <PriceWrapper>
            <Price>${product.price}</Price>
            {product.discountPercentage > 0 && <Original>${discountedPrice}</Original>}
          </PriceWrapper>
          <Rating>
            <Star>★</Star>
            {product.rating.toFixed(1)}
            <span style={{ color: '#9ca3af' }}>({reviewCount})</span>
          </Rating>
        </InfoSection>
      </Card>
    </StyledLink>
  );
}
