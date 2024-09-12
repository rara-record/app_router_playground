import { Boundary } from '#/ui/boundary';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <Boundary labels={['parallel-routes/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">
          Parallel Routes (병렬 라우트)
        </h2>
        <ul>
          <li>
            병렬 라우트는 하나의 레이아웃 내에서 여러 독립적인
            페이지를 동시에 표시할 수 있게 해주는 기능입니다.
          </li>
          <li>
            이는 `@폴더명` 구문을 사용하여 구현됩니다(예:
            app/@dashboard/page.js).
          </li>
          <li>
            Parallel Routes는{' '}
            <a href="https://nextjs-ko.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes">
              Conditional Routes (조건부 라우트)
            </a>{' '}
            and{' '}
            <a href="https://nextjs-ko.org/docs/app/building-your-application/routing/intercepting-routes">
              Intercepted Routes (가로챈 라우트)
            </a>
            와 같은 고급 라우팅 패턴에 사용될 수도 있습니다.
          </li>
          <li>
            Parallel Rout 탭을 사용하여 네비게이션을 시도해 보세요.
            URL이 변경되지만 영향을 받지 않는 다른 Parallel Route는
            그대로 유지되는 것을 확인하세요.
          </li>
          <li>
            브라우저의 뒤로 가기와 앞으로 가기 네비게이션을 사용해
            보세요. 브라우저의 URL 히스토리 상태와 활성 UI 상태가
            정확히 동기화되는 것을 확인하세요.
          </li>
          <li>
            하나의 Parallel Route의 탭으로 이동한 후 브라우저를
            새로고침해 보세요. 초기 URL과 일치하지 않는 Parallel
            Route에 대해 어떤 UI를 표시할지 선택할 수 있음을
            확인하세요.
          </li>
        </ul>
        <div className="flex gap-2">
          <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/routing/parallel-routes">
            Docs
          </ExternalLink>
          <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/parallel-routes">
            Code
          </ExternalLink>
        </div>
      </div>
    </Boundary>
  );
}
