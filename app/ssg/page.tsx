import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Static Data</h1>

      <ul>
        <li>
          기본적으로 Next.js의 data fetching은 정적으로 캐시됩니다.
        </li>
        <li>
          이 예제에서는 포스트 1과 2에 대한 data fetching를 정적으로
          캐시합니다.
        </li>
        <li>
          처음 요청할 때 무작위 세 번째 게시물이 온디맨드 정적 렌더링
          방식으로 가져옵니다.
        </li>
        <li>
          각 게시물로 이동하여 페이지가 렌더링된 타임스탬프를 기록해
          보세요.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/ssg">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
