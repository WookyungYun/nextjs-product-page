'use client';
import Image from 'next/image';
import { ProductDetailProps } from '../../types/product';
import { CenteredMessage, Original, Price, Rating, Star, StyledLink, Title } from './product.style';
import { BrandCategory, CardWrapper, Description, FlexBox, GridWarpper, MainImage, PriceSection, ProductHeader, RatingStock, ThumbnailButton, ThumbnailGrid } from './productDetail.style';
import { useState } from 'react';

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const discountedPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  if (!product)
    return (
      <FlexBox>
        <CenteredMessage>상품 정보를 찾을 수 없습니다.</CenteredMessage>
        <StyledLink href='/'>
          <CenteredMessage>Go to Home</CenteredMessage>
        </StyledLink>
      </FlexBox>
    );
  return (
    <CardWrapper>
      <GridWarpper>
        <MainImage>
          <Image src={product.images[selectedImage]} alt={product.title} fill style={{ objectFit: 'contain' }} priority />
        </MainImage>
        <ThumbnailGrid>
          {product.images.map((image, index) => (
            <ThumbnailButton key={index} onClick={() => setSelectedImage(index)} $isSelected={selectedImage === index}>
              <Image src={image} alt={`${product.title} ${index + 1}`} fill style={{ objectFit: 'contain' }} />
            </ThumbnailButton>
          ))}
        </ThumbnailGrid>
      </GridWarpper>

      <GridWarpper>
        <ProductHeader>
          <BrandCategory>
            {product.brand && <span>{product.brand} |</span>}
            <span>{product.category}</span>
          </BrandCategory>
          <Title>{product.title}</Title>
          <Rating>
            <Star>★</Star> <span>({product.rating})</span>
          </Rating>
          <RatingStock>
            <span>{product.stock} in stock</span>
          </RatingStock>
        </ProductHeader>

        <PriceSection>
          <Price>${discountedPrice}</Price>
          <Original>${product.price.toFixed(2)}</Original>
        </PriceSection>

        <Description>{product.description}</Description>
      </GridWarpper>
    </CardWrapper>
  );
}
