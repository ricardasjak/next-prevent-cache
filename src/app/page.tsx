import Link from 'next/link';

export const revalidate = 0;
export default function Home() {
  return (
      <div>
        <h1>Home page, server time: {new Date().toLocaleTimeString()}</h1>
        <Link href={'/details'} prefetch={false}>Details page</Link>
    </div>
  )
}
