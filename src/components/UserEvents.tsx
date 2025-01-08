import { getData } from '@/lib/db'
import Link from 'next/link'
import { EventDetailLink } from './EventDetailLink'
import { UsersFilters } from './UsersFilters'

export const UserEvents = async ({ searchParams, userId }) => {
  const {} = await searchParams

  const events = getData('events.json').filter(item => item.user_id === userId)

  console.log('events', events.length)
  //   const filteredUser = users.filter(
  //     user => !filters_user_id || user === filters_user_id,
  //   )

  // console.log('filteredUser', filteredUser.length)
  // console.log('filteredUser', filteredUser)

  return (
    <div className="flex flex-1 gap-1">
      {userId}

      {/* <h2 className="text-base">Users</h2>

      <span className="pb-2 text-sm tracking-wide opacity-60">Users</span>

      <UsersFilters users={users} />

      <ul className="list bg-base-100 rounded-box shadow-md">
        {filteredUser.map(user_id => (
          <li className="list-row" key={user_id}>
            <div className="avatar avatar-placeholder flex items-center gap-2">
              <div className="bg-neutral text-neutral-content w-8 rounded">
                <span className="text-xs">
                  {user_id.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            <div>
              <div>{user_id.substring(0, 2).toUpperCase()}</div>
              <div className="text-xs font-semibold uppercase opacity-60">
                {user_id}
              </div>
            </div>

            <EventDetailLink userId={user_id} />
          </li>
        ))}
      </ul>

      <div className="join">
        <Link href={`?page=${+page > 1 ? page - 1 : 1}`} scroll={false}>
          <button className="btn join-item">«</button>
        </Link>

        <button className="btn join-item">Page {page}</button>

        <Link
          href={`?page=${filteredUser.length > 1 ? +page : +page + 1}`}
          scroll={false}
        >
          <button className="btn join-item">»</button>
        </Link>
      </div> */}
    </div>
  )
}
