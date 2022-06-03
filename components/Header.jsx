import Image from 'next/image';

export default function Header() {
    return (
        <div className="header">
            <Image src="/assets/VFL_Logo_Gold.svg" alt="Venice Freestyle Lab" width="400" height="200" />
        </div>
    )
}