import { NextResponse } from 'next/server'

export async function GET() {

  return NextResponse.json({ route: `Ignored route -- no auth available.` })
}
