import { getAuth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const user = getAuth(req)

  if (!user.userId) {
    return NextResponse.json({ route: 'This is a fake 401' })
  }

  return NextResponse.json({ route: `Protected Route with Auth - ${user?.userId ? user.userId : 'No user'}` })
}
