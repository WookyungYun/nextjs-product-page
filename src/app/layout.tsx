import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import StyledComponentsRegistry from './components/lib/registry';

export const metadata: Metadata = {
  title: '상품 목록 페이지 | weebur',
  description: 'Next.js를 활용한 상품 목록 페이지입니다. SSR과 CSR을 적절히 분리하여 구현한 프로젝트입니다.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
