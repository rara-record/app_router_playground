import type { Category } from '#/app/api/categories/category';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const res = await fetch(
    // 시뮬레이션하기 위해 의도적으로 데이터의 응답을 지연시킵니다
    // 'loading.js'의 구현을 보기 위함입니다.
    `https://app-playground-api.vercel.app/api/categories?delay=1000&slug=${params.categorySlug}`,
    {
      // 더 나은 데모를 위해 의도적으로 Next.js 캐시를 비활성화합니다
      // `loading.js`
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const category = (await res.json()) as Category;

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
