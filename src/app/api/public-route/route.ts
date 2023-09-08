import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = auth()

  console.log('user', user)
  console.log('route handler hit')
  return NextResponse.json({ route: `Public Route - ${user?.userId ? user.userId : 'No user'}` })
}
