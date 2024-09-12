import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Layouts</h1>

      <ul>
        <li>레이아웃은 여러 페이지 간에 공유되는 UI입니다.</li>
        <li>
          페이지 네비게이션 시, 레이아웃은 상태를 유지하고, 상호작용이
          가능한 상태를 유지하며, 리렌더링되지 않습니다. 또한, 두 개
          이상의 레이아웃을 중첩해서 사용할 수 있습니다
        </li>
        <li>
          카테고리와 서브 카테고리 간 네비게이션을 시도해 보세요.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/routing/pages">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
