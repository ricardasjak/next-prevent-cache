import Link from 'next/link';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <h2>server time: {new Date().toLocaleTimeString()}</h2>
            <Link href={`/details`} prefetch={false}>Amsterdam time</Link>
            <br/><br/>
            <a href={'/details'}>Amsterdam time (anchor tag)</a>
        </div>
    );
}
