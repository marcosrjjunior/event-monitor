import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { CubeHole, Menu, OrthogonalView, Reports } from 'iconoir-react'

import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Event monitor',
  description: 'event monitor',
  authors: [{ name: 'marcosrjjunior', url: 'https://marcosrjjunior.com' }],
}

const items = [
  {
    name: 'Events',
    icon: <CubeHole />,
    link: '/',
  },
  {
    name: 'Reports',
    icon: <Reports />,
    link: '/reports',
  },
  {
    name: 'Heatmap',
    icon: <OrthogonalView />,
    link: '/heatmap',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar bg-base-100">
          <div className="navbar-start w-full">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <Menu />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 gap-2 p-2 shadow"
              >
                {items.map(item => (
                  <li key={item.name}>
                    <Link href={item.link}>
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/" className="btn btn-ghost text-xl">
              event monitor
            </Link>

            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {items.map(item => (
                  <li key={item.name}>
                    <Link href={item.link}>
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                  </div> */}
          </div>
        </div>

        {children}
      </body>
    </html>
  )
}
