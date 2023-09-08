import Image from 'next/image'
import styles from './page.module.css'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import FetchComponent from './FetchComponent'

export default function Home() {
  return (
    <main className={styles.main}>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in"><button>Sign In</button></Link>
      </SignedOut>
      <ul>
        <li>
          <Link href="/api/public-route"><button>/api/public-route</button></Link>
          <p>should work all the time and either return the user id or no user in the message</p>
        </li>
        <li>
          <Link href="/api/protected-route"><button>/api/protected-route</button></Link>
          <p>if the user is logged in, return message with userId. otherwise redirect to sign-in</p>
        </li>
        <li>
          <Link href="/api/protected-route-no-sdk"><button>/api/protected-route-no-sdk</button></Link>
          <p>same as above, but no userId.</p>
        </li>
        <li>
          <Link href="/api/protected-by-route"><button>/api/protected-by-route</button></Link>
          <p>if user is logged show userId. If not show message user is not logged in and 401 in network tab</p>
        </li>
        <li>
          <Link href="/api/ignored-route"><button>/api/ignore-route</button></Link>
          <p>always works, never any userId or auth info</p>
        </li>
      </ul>
      <div>
        <p>Fetch below</p>
        <FetchComponent />
      </div>
    </main>
  )
}
