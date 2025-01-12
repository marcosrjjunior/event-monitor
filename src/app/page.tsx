import { EventsWrapper } from '@/components/Events/EventsWrapper'
import { Users } from '@/components/Users/Users'
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
      </main>
    </div>
  )
}
