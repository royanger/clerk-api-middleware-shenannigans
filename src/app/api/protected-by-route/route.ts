import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = auth()

  if (!user.userId) {
    return NextResponse.json({ route: 'This is a fake 401, just returned to see in action' })
  }

  return NextResponse.json({ route: `Protected Route with Auth - ${user?.userId ? user.userId : 'No user'}` })
}
