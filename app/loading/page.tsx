import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Instant Loading States</h1>

      <ul>
        <li>
          이 예제에는 각 카테고리 페이지의 데이터를 `가져올` 때
          인위적인 지연이 있습니다. <code>loading.js</code> 는
          카테고리 페이지의 데이터가 스트리밍되기 전에 로드되는 동안
          로딩 스켈레톤을 즉시 표시하는 데 사용됩니다.
        </li>
        <li>데이터는 스트리밍 방식으로 로드됩니다.</li>
        <li>
          중첩된 레이아웃이나 페이지가 로드되는 동안에도 공유
          레이아웃은 계속 상호작용이 가능합니다. 예를 들어, 하위
          컴포넌트가 로드되는 동안에도 카운터를 클릭할 수 있습니다.
        </li>
        <li>
          사용자가 한 카테고리로 이동하는 도중에 다른 카테고리를
          클릭하면, 첫 번째 카테고리의 로딩이 완료되기 전에 두 번째
          카테고리로 전환할 수 있습니다.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/loading">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
