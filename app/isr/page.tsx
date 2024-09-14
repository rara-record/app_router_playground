import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Static Data</h1>

      <ul>
        <li>
          이 예시에서는 3개의 게시물이 ISR을 사용하여 데이터를
          가져옵니다. 캐시된 응답은 60초 동안만 신선하게 유지됩니다.
        </li>
        <li>
          각 게시물 페이지로 이동해보면, 해당 페이지가 렌더링된
          타임스탬프를 확인할 수 있습니다.
        </li>
        <li>
          60초 후에 새로고침을 하면, 다음 요청 시 데이터가 다시
          검증되고, 새로운 콘텐츠가 제공됩니다.
        </li>
        <li>
          또 한 번 새로고침하면, 검증된(업데이트된) 페이지를 볼 수
          있습니다.
        </li>
        <li>
          ISR을 사용하면 정적 페이지도 설정한 주기마다 서버에서 다시
          생성되어 동적 콘텐츠를 제공할 수 있습니다.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs-ko.org/docs/app/building-your-application/data-fetching/fetching">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/rara-record/app_router_playground/tree/main/app/isr">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
