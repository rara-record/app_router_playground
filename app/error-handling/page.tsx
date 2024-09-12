import BuggyButton from '#/ui/buggy-button';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Error Handling</h1>

      <ul>
        <li>
          <code>error.js</code> 는 라우트 세그먼트와 그 하위 자식들에
          대한 error boundary를 정의합니다. 이는 특정 에러 정보를
          표시하고, 에러로부터 복구를 시도하는 기능을 구현하는 데
          사용될 수 있습니다.
        </li>
        <li>
          중첩된 레이아웃 내에서 네비게이션 페이지를 시도하고 에러를
          발생시켜 보세요. 에러가 해당 세그먼트에만 국한되어 있고,
          앱의 나머지 부분은 여전히 상호작용이 가능한 상태로 유지되는
          것을 확인할 수 있습니다.
        </li>
      </ul>

      <div className="flex gap-2">
        <BuggyButton />

        <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/routing/error-handling">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/error-handling">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
