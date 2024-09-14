import { ExternalLink } from '#/ui/external-link';

export default async function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Streaming with Suspense</h1>

      <ul>
        <li>
          스트리밍을 사용하면 서버에서 클라이언트로 UI의 단위를
          점진적으로 렌더링하고 전송할 수 있습니다.
        </li>

        <li>
          이렇게 하면 사용자는 전체 페이지가 로드될 때까지 기다렸다가
          다른 콘텐츠와 상호 작용할 수 있는 대신 페이지의 가장 중요한
          부분만 보고 나머지 콘텐츠가 로드되는 동안 상호 작용할 수
          있습니다.
        </li>

        <li>스트리밍은 엣지 및 노드 런타임 모두에서 작동합니다..</li>

        <li>
          위의 탐색에서 <strong>런타임을 선택</strong>하여 스트리밍을
          시도해 보세요.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/streaming">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
