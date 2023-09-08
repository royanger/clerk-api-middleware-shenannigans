# API routes with Clerk

## Unexpected 404 on API routes problem

1. Put creds in `.env`
2. `pnpm dev`
3. Clear browser storage
4. Open http://localhost:3000/api/public-route

### Expected
Shows `unauthorized`

### Actual
`401` with `X-Clerk-Auth-Reason: uat-missing` but only when loading via browser

## Unable to use api route without middleware problem ---
1. Put creds in `.env`
2. `pnpm dev`
3. Clear browser storage
4. Open http://localhost:3000/api/ignored-route

### Expected
Shows `unauthorized` because the session does not exist (logged out)

### Actual

`500` with server error `Clerk: auth() was called but it looks like you aren't using authMiddleware in your middleware file. Please use authMiddleware and make sure your middleware matcher is configured correctly and it matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs`