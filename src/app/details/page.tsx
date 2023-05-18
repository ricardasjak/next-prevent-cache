import Link from 'next/link';

export const revalidate = 0;
export default function DetailsPage() {
    return (
        <div>
            <h1>Details page, server time: {new Date().toLocaleTimeString()}</h1>
            <Link href={'/'}>Back</Link>
        </div>
    )
}
