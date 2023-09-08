# API routes with Clerk

## Background:

* [Conversation on Discord](https://discord.com/channels/856971667393609759/1149164897767264417)
* Repro made with `create-next-app`, just added `@clerk/nextjs` and `/src/app/api/*`
* [Relevant Clerk docs here](https://clerk.com/docs/references/nextjs/route-handlers#protecting-route-handlers).

## Deployed on Vercel

* https://clerk-api-middleware-shenannigans.vercel.app/api/public-route
* https://clerk-api-middleware-shenannigans.vercel.app/api/ignored-route
* https://clerk-api-middleware-shenannigans.vercel.app/api/protected-route
* https://clerk-api-middleware-shenannigans.vercel.app/api/protected-route-no-sdk


## Problem 1: Unexpected 401 on public API

1. Put creds in `.env`
2. `pnpm dev`
3. Clear browser storage
4. Open http://localhost:3000/api/public-route

### Expected
Shows `unauthorized` because the route called `auth()` and the user is logged out

### Actual
Status `401` if opened in a browser, with headers:

```
X-Clerk-Auth-Reason: uat-missing
X-Clerk-Auth-Status: interstitial
```


## Problem 2: Unable to use auth() in a public API route if it's ignored
1. Put creds in `.env`
2. `pnpm dev`
3. Clear browser storage
4. Open http://localhost:3000/api/ignored-route

### Expected
Shows `unauthorized` because the session does not exist (logged out)

### Actual
`500` with server error `Clerk: auth() was called but it looks like you aren't using authMiddleware in your middleware file. Please use authMiddleware and make sure your middleware matcher is configured correctly and it matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs`