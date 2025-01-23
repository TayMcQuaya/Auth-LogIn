'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function HomePage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = '/auth/signin'
    }
  }, [status])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You are signed in as {session.user?.email}
          </p>
        </div>
        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
} 