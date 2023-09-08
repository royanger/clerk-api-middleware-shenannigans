import { NextResponse } from 'next/server'

export async function GET() {
  // this may never be seen -- because middleware is protecting it someone visiting the route would be redirected to sign-in
  return NextResponse.json({ route: 'protected but not using auth(), etc.' })
}

