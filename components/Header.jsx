import Image from 'next/image';
import Logo from '../public/assets/VFL_Logo_Gold.svg';

export default function Header() {
    return (
        <div className="header">
            <Image src={Logo} alt="Venice Freestyle Lab" width="400" height="200" />
        </div>
    )
}