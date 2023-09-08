'use client'

import * as React from 'react'

async function getAPIRoute(token: string | null) {
  const res = await fetch(`http://localhost:3000/api/protected-by-route`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}

export default function FetchComponent(props: { token: string | null }) {
  const [fetchData, setFetchData] = React.useState({})

  async function fetchFromAPI() {
    const res = await getAPIRoute(props.token)
    setFetchData(res)
  }

  React.useEffect(() => {
    fetchFromAPI()
  }, [])

  return (
    <div>
      {JSON.stringify(fetchData, null, 2)}
    </div>
  )
}

