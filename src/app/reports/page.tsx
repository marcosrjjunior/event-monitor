import Charts from '@/components/Charts/Charts'

export default async function ChartsPage() {
  return (
    <div className="bg-base-100 min-h-screen gap-2 p-8 pb-20 font-(family-name:--font-geist-sans)">
      <main className="">
        <span>
          **This page still need some work. We are still using hardcoded data
        </span>
        <Charts />
      </main>
    </div>
  )
}
