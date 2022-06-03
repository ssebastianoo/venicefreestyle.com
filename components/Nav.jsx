import Link from "next/link";

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav-item">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className="nav-item">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <div className="nav-item">
                <Link href="/social">
                    <a>Social</a>
                </Link>
            </div>
        </div>
    );
}
