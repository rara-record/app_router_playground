import { Boundary } from '#/ui/boundary';
import { cookies } from 'next/headers'; // next/headers는 서버 컴포넌트에서만 사용할 수 있음.
import React from 'react';
import { CartCountProvider } from '#/app/streaming/_component/cart-count-context';
import { Header } from '#/app/streaming/_component/header';

export const metadata = {
  title: 'Streaming (Node Runtime)',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartCount = Number(
    cookies().get('_cart_count')?.value || '0'
  );

  return (
    <>
      <div className="prose prose-sm prose-invert mb-8 max-w-none">
        <ul>
          <li>
            초기 응답의 일부로 기본 제품 정보가 먼저 로드됩니다.
          </li>
          <li>
            이차적으로 배송 날짜, 기타 추천 제품, 고객 리뷰와 같은
            보다 개인화된 세부 정보(더 느릴 수 있음)가 점진적으로
            스트리밍됩니다.
          </li>
          <li>새로고침하거나 다른 추천 상품으로 이동해 보세요.</li>
        </ul>
      </div>
      <Boundary
        animateRerendering={false}
        labels={['Demo']}
        size="small"
      >
        <CartCountProvider initialCartCount={cartCount}>
          <div className="space-y-10">
            <Header />

            {children}
          </div>
        </CartCountProvider>
      </Boundary>
    </>
  );
}
