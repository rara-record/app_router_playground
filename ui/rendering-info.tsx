import { RenderedTimeAgo } from './rendered-time-age';

export function RenderingInfo({
  type,
}: {
  type: 'ssg' | 'ssgod' | 'ssr' | 'isr';
}) {
  let msg = '';

  // switch (type) {
  //   case 'ssg':
  //     msg =
  //       '(SSG): 빌드 타임에 정적으로 미리 렌더링되어 모든 사용자가 동일한 HTML을 받습니다.';
  //     break;
  //   case 'ssgod':
  //     msg =
  //       '(SSG-OD): 빌드 시 정적으로 생성되지 않은 경로에 대한 첫 번째 요청이 들어올 때 콘텐츠를 생성합니다. 생성된 콘텐츠는 CDN에 캐시되어 후속 요청에서 재사용됩니다. 데이터는 요청 시점에 가져오지만, 결과는 정적 콘텐츠처럼 취급됩니다.';
  //     break;
  //   case 'isr':
  //     msg =
  //       '(ISR): 빌드 타임에 정적으로 렌더링되고, 주기적으로 데이터가 업데이트되어 새로운 페이지를 생성합니다.';
  //     break;
  //   case 'ssr':
  //     msg =
  //       '(SSR): 요청이 있을 때마다 서버에서 동적으로 렌더링되어, 각 사용자에게 맞춤화된 HTML을 제공합니다.';
  //     break;
  // }

  return (
    <div className="space-y-3 rounded-lg bg-gray-900 p-3">
      <div className="text-sm text-gray-300">{msg}</div>

      <div className="flex">
        <RenderedTimeAgo timestamp={Date.now()} />
      </div>
    </div>
  );
}
