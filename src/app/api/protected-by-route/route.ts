import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = auth()

  if (!user.userId) {
    return new Response('User not logged in', { status: 401 })
  }

  return NextResponse.json({ route: `Protected Route with Auth - ${user?.userId ? user.userId : 'No user'}` })
}
