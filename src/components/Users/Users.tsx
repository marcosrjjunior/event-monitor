import Link from 'next/link'
import cx from 'clsx'

import { getData } from '@/lib/db'
import { UserDetailLink } from './EventDetailLink'
import { UsersFilters } from './UsersFilters'

export const Users = async ({ searchParams }) => {
  const { page = 1, filters_user_id, user_id } = await searchParams

  const users = getData('users.json')
  const filteredUser = users.filter(
    user => !filters_user_id || user.id === filters_user_id,
  )

  return (
    <div className="flex flex-col md:min-w-[375px]">
      {/* <h2 className="text-base">Users</h2> */}

      <span className="pb-2 text-sm tracking-wide opacity-60">Users</span>

      <UsersFilters users={users} />

      <ul className="list bg-base-100 rounded-box shadow-md">
        {filteredUser.map(user => (
          <li
            className={cx('list-row', {
              'opacity-70': user.id !== user_id,
            })}
            key={user.id}
          >
            <div className="avatar avatar-placeholder flex items-center gap-2">
              <div className="bg-neutral text-neutral-content w-8 rounded">
                <span className="text-xs">
                  {user.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            <div>
              <div>{user.name.toUpperCase()}</div>

              <div className="text-xs font-semibold uppercase opacity-60">
                ROLE
              </div>
            </div>

            <UserDetailLink userId={user.id} disabled={user.id === user_id} />
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
      </div>
    </div>
  )
}
