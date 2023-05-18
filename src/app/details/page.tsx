import Link from 'next/link';

export const revalidate = 0;
export default async function DetailsPage() {
    const timeApiResp = await fetch(
        'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam',
        {
            next: { revalidate: 0 },
            cache: 'no-cache',
        });
    return (
        <div>
            <h1>Details page</h1>
            <h2>Time in Amsterdam: {(await timeApiResp.json()).dateTime}</h2>
            <Link href={'/'} prefetch={false}>Back</Link>
            <br/><br/>
            <a href={'/'}>Back (anchor tag)</a>
        </div>
    );
}
