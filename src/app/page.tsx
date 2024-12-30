import { Events } from '@/components/Events'
import { CubeHole } from 'iconoir-react'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home({ searchParams }) {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-2 bg-base-100 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            {/* <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div> */}

            <a className="btn btn-ghost text-xl">event monitor</a>
          </div>

          {/* hidden lg:flex */}
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>
                  <CubeHole />
                  Events
                </a>
              </li>

              <li>
                <a>
                  <CubeHole />
                  Heatmap
                </a>
              </li>

              <li>
                <a>
                  <CubeHole />
                  Charts
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="navbar-end">
            <a className="btn">Button</a>
          </div> */}
        </div>

        <Suspense>
          <Events searchParams={searchParams} />
        </Suspense>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ol className="list-inside list-decimal font-[family-name:var(--font-geist-mono)] text-sm">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button className="btn">
            <CubeHole />
            Button
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
