import { EventsWrapper } from '@/components/Events/EventsWrapper'
import { Users } from '@/components/Users/Users'
import { CubeHole } from 'iconoir-react'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Home({ searchParams }) {
  const { user_id } = await searchParams

  return (
    <div className="bg-base-100 min-h-screen gap-2 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="flex w-full flex-row flex-wrap gap-5">
          <Suspense>
            <Users searchParams={searchParams} />
          </Suspense>

          <Suspense>
            <EventsWrapper userId={user_id} />
          </Suspense>
        </div>

        {/* <Suspense>
          <Events searchParams={searchParams} />
        </Suspense>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

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
