import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Route Groups</h1>

      <ul>
        <li>
          이 예제는 라우트 그룹을 사용하여 URL 구조에 영향을 주지
          않으면서 앱의 다른 섹션들에 대한 레이아웃을 생성합니다.
        </li>
        <li>
          페이지들을 탐색하면서 각 섹션에 사용된 다양한 레이아웃을
          확인해 보세요.
        </li>
        <li>
          라우트 그룹은 다음과 같은 목적으로 사용될 수 있습니다:
        </li>
        <ul>
          <li>
            공유 레이아웃에서 특정 라우트 세그먼트를 제외시키기.
          </li>
          <li>URL 구조에 영향을 주지 않으면서 라우트를 구성하기</li>
          <li>
            애플리케이션의 최상위 레벨을 분할하여 여러 개의 루트
            레이아웃 생성하기
          </li>
        </ul>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/routing/route-groups">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/route-groups">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
