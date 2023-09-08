'client component'

async function getAPIRoute() {

  const res = await fetch(`http://localhost:3000/api/protected-by-route`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `bearer ${env.STRAPI_TOKEN}`
    // },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}

export default async function FetchComponent() {
  const test = await getAPIRoute()

  return (
    <div>
      {JSON.stringify(test, null, 2)}
    </div>
  )
}

