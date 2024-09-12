import { CurrentRoute } from '#/app/parallel-routes/_ui/current-route';
import { Boundary } from '#/ui/boundary';
import Link from 'next/link';

export default function Default() {
  return (
    <Boundary
      labels={['@children/default.tsx']}
      color="blue"
      size="small"
    >
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Default UI</h2>

        <p>
          Default UI is 다음과 같은 이유로 렌더링 됩니다{' '}
          <code>@children</code> 슬롯에{' '}
          <code>
            /<CurrentRoute slice={1} />
          </code>{' '}
          와 일치하는 경로 세그먼트가{' '}
          <strong>포함되어 있지 않으므로</strong> default UI가
          렌더링됩니다.
        </p>

        <ul className="text-xs">
          <li>
            <code>
              parallel-routes/
              <CurrentRoute />
              /page.js
            </code>{' '}
            OR{' '}
            <code>
              parallel-routes/@children/
              <CurrentRoute />
              /page.js
            </code>{' '}
            do not exist.
          </li>

          <li>
            <code>parallel-routes/default.js</code> OR{' '}
            <code>parallel-routes/@children/default.js</code> exists.
          </li>
        </ul>

        <div className="not-prose flex">
          <Link
            href="/parallel-routes"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
