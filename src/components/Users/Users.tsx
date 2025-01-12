import Link from 'next/link'
import cx from 'clsx'

import { db } from '@/lib/db'
import { UserDetailLink } from './EventDetailLink'
import { UsersFilters } from './UsersFilters'

export const Users = async ({ searchParams }) => {
  const { page = 1, filters_user_id, user_id } = await searchParams

  // TODO: call your API instead, this was a temporary logic
  const pageSize = 10
  const [users, allUsers] = await Promise.all([
    filters_user_id
      ? db.prepare(`SELECT * FROM users WHERE id = ?`).all(filters_user_id)
      : db
          .prepare(
            `SELECT * FROM users LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`,
          )
          .all(),
    db.prepare(`SELECT * FROM users`).all(),
  ])

  return (
    <div className="flex min-w-full flex-col gap-2 lg:min-w-[375px]">
      <UsersFilters users={allUsers} />

      <ul className="list bg-base-100 rounded-box shadow-md">
        {users.map((user: any) => (
          <li
            className={cx('list-row', {
              'opacity-80': user.id !== user_id,
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

        {/* TODO: adjust max page here, total pages */}
        <Link href={`?page=${+page + 1}`} scroll={false}>
          <button className="btn join-item">»</button>
        </Link>
      </div>
    </div>
  )
}
