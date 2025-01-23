import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
})

export { handler as GET, handler as POST } 