'use client'

import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if (!user) {
        router.push('/auth/signin')
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/auth/signin')
    } catch (error) {
      console.error('Error signing out', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Your Dashboard
          </h2>
          <div className="mt-3 text-center">
            <div className="flex items-center justify-center">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-16 w-16 rounded-full"
                />
              )}
            </div>
            <p className="mt-4 text-lg text-gray-600">
              {user.displayName}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {user.email}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleSignOut}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
} 